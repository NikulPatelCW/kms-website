import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { ContactUs } from './contact-us';
import { environment } from '../../../environments/environment';

describe('ContactUs', () => {
  let component: ContactUs;
  let fixture: ComponentFixture<ContactUs>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUs],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUs);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header background image', () => {
    expect(component.headerBgPath).toBe('assets/images/header-bg/contact-us.jpg');
    expect(component.headerImgStyle).toEqual({
      'background-image': 'url(assets/images/header-bg/contact-us.jpg)',
    });
  });

  it('should initialize contact form with required fields', () => {
    expect(component.contactForm.get('fullName')).toBeDefined();
    expect(component.contactForm.get('email')).toBeDefined();
    expect(component.contactForm.get('phone')).toBeDefined();
    expect(component.contactForm.get('message')).toBeDefined();
  });

  it('should validate email format', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBe(true);

    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBe(false);
  });

  it('should POST to contact API when valid', () => {
    component.recaptchaToken = 'test-recaptcha-token';

    component.contactForm.patchValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+91 7926309540',
      message: 'Test message',
    });

    component.submit();

    const req = httpMock.expectOne(environment.contactApiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+91 7926309540',
      message: 'Test message',
      recaptchaToken: 'test-recaptcha-token',
    });

    req.flush({
      success: true,
      message: 'Thank you.',
    });

    expect(component.alertSuccess).toBe(true);
    expect(component.submitting).toBe(false);
  });

  it('should mark all fields as touched when form is invalid', () => {
    spyOn(component.contactForm, 'markAllAsTouched');

    component.submit();
    expect(component.contactForm.markAllAsTouched).toHaveBeenCalled();
  });

  it('should not POST when reCAPTCHA is not completed', () => {
    component.recaptchaToken = null;
    component.contactForm.patchValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+91 7926309540',
      message: 'Hi',
    });

    component.submit();

    expect(httpMock.match(environment.contactApiUrl).length).toBe(0);
    expect(component.alertDanger).toBe(true);
  });

  it('should update header style on ngOnInit', () => {
    component.headerBgPath = '/new/path/image.jpg';
    component.ngOnInit();
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(/new/path/image.jpg)' });
  });
});
