import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAndDisruptiveBusinesses } from './tech-and-disruptive-businesses';

describe('TechAndDisruptiveBusinesses', () => {
  let component: TechAndDisruptiveBusinesses;
  let fixture: ComponentFixture<TechAndDisruptiveBusinesses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechAndDisruptiveBusinesses],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechAndDisruptiveBusinesses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('/assets/images/expertise/tech.png');
    expect(component.headerTitle).toBe('Tech & Disruptive Businesses');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.paragraphs.length).toBe(2);
    expect(component.sections.image).toBe('/assets/images/expertise/tech-img.png');
    expect(component.sections.reverse).toBe(false);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Tech Adoption/Integration | Artificial Intelligence | IT Risk Advisory | Technology Advisory | Digitization and e-Business');
  });

  it('should have tech and disruptive business content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('technology-driven and disruptive businesses');
    expect(component.sections.paragraphs[1]).toContain('digital and disruptive business dimensions');
  });
});
