import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxEfficiencies } from './tax-efficiencies';

describe('TaxEfficiencies', () => {
  let component: TaxEfficiencies;
  let fixture: ComponentFixture<TaxEfficiencies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxEfficiencies],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxEfficiencies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('assets/images/expertise/tax.png');
    expect(component.headerTitle).toBe('Tax Efficiencies');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.paragraphs.length).toBe(3);
    expect(component.sections.image).toBe('assets/images/expertise/tax-img.png');
    expect(component.sections.reverse).toBe(true);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Direct Taxation | Tax Treaties | Transfer pricing | Global Taxation | Tax Efficiency and Structuring');
  });

  it('should have tax efficiency content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('tax planning');
    expect(component.sections.paragraphs[1]).toContain('international tax implications');
    expect(component.sections.paragraphs[2]).toContain('high-net-worth individuals');
  });
});
