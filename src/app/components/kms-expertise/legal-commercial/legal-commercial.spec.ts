import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCommercial } from './legal-commercial';

describe('LegalCommercial', () => {
  let component: LegalCommercial;
  let fixture: ComponentFixture<LegalCommercial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalCommercial],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalCommercial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
