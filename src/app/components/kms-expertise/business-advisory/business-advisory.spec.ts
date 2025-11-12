import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdvisory } from './business-advisory';

describe('BusinessAdvisory', () => {
  let component: BusinessAdvisory;
  let fixture: ComponentFixture<BusinessAdvisory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAdvisory],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAdvisory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('/assets/images/expertise/business.png');
    expect(component.headerTitle).toBe('Business Advisory');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.title).toBe('');
    expect(component.sections.paragraphs.length).toBe(3);
    expect(component.sections.image).toBe('/assets/images/expertise/business-advisory-img.png');
    expect(component.sections.contentBgImage).toBe(true);
    expect(component.sections.reverse).toBe(false);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Corporate Governance | Growth & Positioning | Innovation Strategy & Delivery | Management Strategies');
  });

  it('should have business advisory content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('business advisory services');
    expect(component.sections.paragraphs[1]).toContain('business challenges');
    expect(component.sections.paragraphs[2]).toContain('scientific and process-driven approach');
  });
});
