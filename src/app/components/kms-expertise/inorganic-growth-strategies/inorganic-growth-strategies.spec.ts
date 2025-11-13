import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InorganicGrowthStrategies } from './inorganic-growth-strategies';

describe('InorganicGrowthStrategies', () => {
  let component: InorganicGrowthStrategies;
  let fixture: ComponentFixture<InorganicGrowthStrategies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InorganicGrowthStrategies],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InorganicGrowthStrategies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('assets/images/expertise/inorganic.jpg');
    expect(component.headerTitle).toBe('Inorganic Growth Strategies');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.paragraphs.length).toBe(2);
    expect(component.sections.image).toBe('assets/images/expertise/inorganic-img.jpg');
    expect(component.sections.reverse).toBe(false);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Joint Venture | Strategic Alliances | Deal/Transactional Structuring | Post-acquisition integration & Consolidation');
  });

  it('should have inorganic growth content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('inorganic growth strategies');
    expect(component.sections.paragraphs[1]).toContain('sustainable, long-term growth');
  });
});
