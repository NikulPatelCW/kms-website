import { Component, inject } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [SharedImports],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  headerBgPath = 'assets/images/header-bg/contact-us.jpg';
  headerImgStyle: any = { 'background-image': `url(${this.headerBgPath})` };
  ngOnInit() {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
  }
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['',],
    captcha: [false]
  });

  submit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
