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

interface CareerApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

@Component({
  selector: 'app-career',
  imports: [SharedImports],
  templateUrl: './career.html',
  styleUrl: './career.scss',
})
export class Career implements OnInit, AfterViewInit {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cdr = inject(ChangeDetectorRef);

  @ViewChild('recaptchaHost') recaptchaHost?: ElementRef<HTMLDivElement>;
  @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;

  readonly recaptchaSiteKey = environment.recaptchaSiteKey;

  headerBgPath = 'assets/images/header-bg/contact-us.jpg';
  headerImgStyle: Record<string, string> = {};

  submitting = false;
  alertSuccess = false;
  alertDanger = false;
  alertMessage = '';
  isDragOver = false;
  uploadedFile: File | null = null;
  fileError = '';

  recaptchaToken: string | null = null;
  recaptchaWidgetId: number | undefined;
  recaptchaLoadError = false;

  readonly phonePattern = /^[0-9+\s().-]{8,40}$/;
  readonly allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  readonly maxFileSize = 5 * 1024 * 1024; // 5MB

  careerForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
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

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  removeFile() {
    this.uploadedFile = null;
    this.fileError = '';
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  private handleFile(file: File) {
    this.fileError = '';
    if (!this.allowedTypes.includes(file.type)) {
      this.fileError = 'Only PDF and DOC/DOCX files are allowed.';
      return;
    }
    if (file.size > this.maxFileSize) {
      this.fileError = 'File size must be less than 5MB.';
      return;
    }
    this.uploadedFile = file;
  }

  getFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  submit() {
    this.alertSuccess = false;
    this.alertDanger = false;
    this.alertMessage = '';

    if (this.recaptchaSiteKey && !this.recaptchaToken) {
      this.alertDanger = true;
      this.alertMessage = 'Please complete "I\'m not a robot" before sending.';
      return;
    }

    if (this.careerForm.invalid) {
      this.careerForm.markAllAsTouched();
      return;
    }

    if (!this.uploadedFile) {
      this.fileError = 'Please upload your CV.';
      return;
    }

    const formData = new FormData();
    const { fullName, email, phone } = this.careerForm.getRawValue();
    formData.append('fullName', (fullName as string).trim());
    formData.append('email', (email as string).trim());
    formData.append('phone', (phone as string).trim());
    formData.append('cv', this.uploadedFile);
    if (this.recaptchaToken) {
      formData.append('recaptchaToken', this.recaptchaToken);
    }

    this.submitting = true;

    // Using same contact API endpoint — adjust if you have a separate career endpoint
    this.http
      .post<CareerApiResponse>(environment.contactApiUrl, formData)
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.alertSuccess = true;
            this.alertMessage = res.message;
            this.careerForm.reset();
            this.removeFile();
            this.resetRecaptcha();
          } else {
            this.alertDanger = true;
            this.alertMessage = res.message || 'Unable to send your application.';
            if (res.errors?.['recaptcha']) {
              this.resetRecaptcha();
            }
          }
        },
        error: (err: HttpErrorResponse) => {
          const body = err.error as CareerApiResponse | undefined;
          this.alertDanger = true;
          this.alertMessage =
            body?.message ??
            (err.status === 0
              ? 'Cannot reach the server. Please try again later.'
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
    if (!host || !g) return;
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
}
