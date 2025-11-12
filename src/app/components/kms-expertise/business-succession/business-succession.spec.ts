import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSuccession } from './business-succession';

describe('BusinessSuccession', () => {
  let component: BusinessSuccession;
  let fixture: ComponentFixture<BusinessSuccession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSuccession],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSuccession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('/assets/images/expertise/succession.png');
    expect(component.headerTitle).toBe('Business Succession');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.title).toBe('');
    expect(component.sections.paragraphs.length).toBe(2);
    expect(component.sections.image).toBe('/assets/images/expertise/business-succession.png');
    expect(component.sections.contentBgImage).toBe(false);
    expect(component.sections.reverse).toBe(true);
  });

  it('should have succession planning content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('succession planning');
    expect(component.sections.paragraphs[1]).toContain('next-generation leaders');
  });
});
