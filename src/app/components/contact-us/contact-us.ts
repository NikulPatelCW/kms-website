import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { SharedImports } from '../../shared/shared-imports';
import { environment } from '../../../environments/environment';

interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback: (response: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
        },
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

@Component({
  selector: 'app-contact-us',
  imports: [SharedImports],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs implements OnInit, AfterViewInit {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  @ViewChild('recaptchaHost') recaptchaHost?: ElementRef<HTMLDivElement>;

  readonly recaptchaSiteKey = environment.recaptchaSiteKey;

  headerBgPath = 'assets/images/header-bg/contact-us.jpg';
  headerImgStyle: Record<string, string> = {
    'background-image': `url(${this.headerBgPath})`,
  };

  submitting = false;
  alertSuccess = false;
  alertDanger = false;
  alertMessage = '';

  recaptchaToken: string | null = null;
  recaptchaWidgetId: number | undefined;
  recaptchaLoadError = false;

  readonly phonePattern = /^[0-9+\s().-]{8,40}$/;

  contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
    message: ['', [Validators.maxLength(5000)]],
  });

  ngOnInit() {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId) || !this.recaptchaSiteKey) {
      return;
    }
    this.loadRecaptchaScript()
      .then(() => this.renderRecaptcha())
      .catch(() => {
        this.recaptchaLoadError = true;
        this.cdr.markForCheck();
      });
  }

  submit() {
    this.clearServerFieldErrors();
    this.alertSuccess = false;
    this.alertDanger = false;
    this.alertMessage = '';

    if (this.recaptchaSiteKey && !this.recaptchaToken) {
      this.alertDanger = true;
      this.alertMessage = 'Please complete "I\'m not a robot" before sending.';
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { fullName, email, phone, message } = this.contactForm.getRawValue();
    const payload: Record<string, string> = {
      fullName: (fullName as string).trim(),
      email: (email as string).trim(),
      phone: (phone as string).trim(),
      message: (message as string).trim(),
    };
    if (this.recaptchaToken) {
      payload['recaptchaToken'] = this.recaptchaToken;
    }

    this.submitting = true;

    this.http
      .post<ContactApiResponse>(environment.contactApiUrl, payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.alertSuccess = true;
            this.alertMessage = res.message;
            this.contactForm.reset();
            this.resetRecaptcha();
          } else {
            this.applyServerErrors(res.errors);
            this.alertDanger = true;
            this.alertMessage = res.message || 'Unable to send your message.';
            if (res.errors?.['recaptcha']) {
              this.resetRecaptcha();
            }
          }
        },
        error: (err: HttpErrorResponse) => {
          const body = err.error as ContactApiResponse | undefined;
          if (body?.errors) {
            this.applyServerErrors(body.errors);
            if (body.errors['recaptcha']) {
              this.resetRecaptcha();
            }
          }
          this.alertDanger = true;
          this.alertMessage =
            body?.message ??
            (err.status === 0
              ? 'Cannot reach the server. If you are developing locally, run PHP (see proxy) or deploy the API.'
              : 'Something went wrong. Please try again later.');
        },
      });
  }

  dismissSuccess() {
    this.alertSuccess = false;
  }

  dismissDanger() {
    this.alertDanger = false;
  }

  private loadRecaptchaScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        resolve();
        return;
      }
      if (window.grecaptcha?.render) {
        resolve();
        return;
      }
      const existing = document.querySelector('script[data-kms-recaptcha="1"]');
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject());
        return;
      }
      const s = document.createElement('script');
      s.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      s.async = true;
      s.defer = true;
      s.dataset['kmsRecaptcha'] = '1';
      s.onload = () => resolve();
      s.onerror = () => reject();
      document.head.appendChild(s);
    });
  }

  private renderRecaptcha() {
    const host = this.recaptchaHost?.nativeElement;
    const g = typeof window !== 'undefined' ? window.grecaptcha : undefined;
    if (!host || !g) {
      return;
    }
    g.ready(() => {
      this.recaptchaWidgetId = g.render(host, {
        sitekey: this.recaptchaSiteKey,
        callback: (token: string) => {
          this.recaptchaToken = token;
          this.cdr.markForCheck();
        },
        'expired-callback': () => {
          this.recaptchaToken = null;
          this.cdr.markForCheck();
        },
        'error-callback': () => {
          this.recaptchaToken = null;
          this.cdr.markForCheck();
        },
      });
      this.cdr.markForCheck();
    });
  }

  private resetRecaptcha() {
    this.recaptchaToken = null;
    if (typeof window !== 'undefined' && window.grecaptcha && this.recaptchaWidgetId !== undefined) {
      window.grecaptcha.reset(this.recaptchaWidgetId);
    }
  }

  private clearServerFieldErrors() {
    (['fullName', 'email', 'phone', 'message'] as const).forEach((key) => {
      const c = this.contactForm.get(key);
      if (!c?.errors?.['server']) {
        return;
      }
      const { server: _s, ...rest } = c.errors;
      c.setErrors(Object.keys(rest).length ? rest : null);
    });
  }

  private applyServerErrors(errors: Record<string, string> | undefined) {
    if (!errors) {
      return;
    }
    Object.entries(errors).forEach(([key, msg]) => {
      const control = this.contactForm.get(key);
      if (control) {
        control.setErrors({ ...(control.errors ?? {}), server: msg });
        control.markAsTouched();
      }
    });
  }
}
