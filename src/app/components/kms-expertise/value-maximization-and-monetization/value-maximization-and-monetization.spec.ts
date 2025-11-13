import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMaximizationAndMonetization } from './value-maximization-and-monetization';

describe('ValueMaximizationAndMonetization', () => {
  let component: ValueMaximizationAndMonetization;
  let fixture: ComponentFixture<ValueMaximizationAndMonetization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueMaximizationAndMonetization],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueMaximizationAndMonetization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('assets/images/expertise/wealth.jpg');
    expect(component.headerTitle).toBe('Value Maximization And Monetization');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.paragraphs.length).toBe(2);
    expect(component.sections.image).toBe('assets/images/expertise/value-maximization.jpg');
    expect(component.sections.reverse).toBe(false);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Deal Value creation | Funding Options & IPO Planning | Monetisation and Exit strategies');
  });

  it('should have value maximization content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('value maximization services');
    expect(component.sections.paragraphs[1]).toContain('exit strategies');
  });
});
