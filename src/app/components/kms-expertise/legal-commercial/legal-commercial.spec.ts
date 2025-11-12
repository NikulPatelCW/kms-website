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

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('/assets/images/expertise/legal.png');
    expect(component.headerTitle).toBe('Legal-Commercial');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.paragraphs.length).toBe(2);
    expect(component.sections.image).toBe('/assets/images/expertise/legal-img.png');
    expect(component.sections.reverse).toBe(true);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Corporate and commercial Law | FEMA/RBI Regulations | Personal Laws | Mercantile and Economic Laws | IPRs | Commercial Relationships');
  });

  it('should have legal commercial content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('legal-commercial advisory');
    expect(component.sections.paragraphs[1]).toContain('family offices');
  });
});
