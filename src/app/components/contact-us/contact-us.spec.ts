import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactUs } from './contact-us';

describe('ContactUs', () => {
  let component: ContactUs;
  let fixture: ComponentFixture<ContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUs, ReactiveFormsModule],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header background image', () => {
    expect(component.headerBgPath).toBe('/assets/images/header-bg/contact-us.png');
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(/assets/images/header-bg/contact-us.png)' });
  });

  it('should initialize contact form with required fields', () => {
    expect(component.contactForm.get('fullName')).toBeDefined();
    expect(component.contactForm.get('email')).toBeDefined();
    expect(component.contactForm.get('phone')).toBeDefined();
    expect(component.contactForm.get('message')).toBeDefined();
    expect(component.contactForm.get('captcha')).toBeDefined();
  });

  it('should have required validators on form fields', () => {
    const fullNameControl = component.contactForm.get('fullName');
    const emailControl = component.contactForm.get('email');
    const phoneControl = component.contactForm.get('phone');
    
    expect(fullNameControl?.hasError('required')).toBe(true);
    expect(emailControl?.hasError('required')).toBe(true);
    expect(phoneControl?.hasError('required')).toBe(true);
  });

  it('should validate email format', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBe(true);
    
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBe(false);
  });

  it('should submit form when valid', () => {
    spyOn(console, 'log');
    
    component.contactForm.patchValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      message: 'Test message',
      captcha: true
    });
    
    component.submit();
    expect(console.log).toHaveBeenCalledWith('Form Data:', component.contactForm.value);
  });

  it('should mark all fields as touched when form is invalid', () => {
    spyOn(component.contactForm, 'markAllAsTouched');
    
    component.submit();
    expect(component.contactForm.markAllAsTouched).toHaveBeenCalled();
  });

  it('should update header style on ngOnInit', () => {
    component.headerBgPath = '/new/path/image.png';
    component.ngOnInit();
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(/new/path/image.png)' });
  });
});
