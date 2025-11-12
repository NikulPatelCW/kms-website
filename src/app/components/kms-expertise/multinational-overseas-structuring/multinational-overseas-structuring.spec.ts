import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultinationalOverseasStructuring } from './multinational-overseas-structuring';

describe('MultinationalOverseasStructuring', () => {
  let component: MultinationalOverseasStructuring;
  let fixture: ComponentFixture<MultinationalOverseasStructuring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultinationalOverseasStructuring],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultinationalOverseasStructuring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('assets/images/expertise/tech.png');
    expect(component.headerTitle).toBe('Multinational / Overseas Structuring');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.paragraphs.length).toBe(2);
    expect(component.sections.image).toBe('assets/images/expertise/multinational-img.png');
    expect(component.sections.reverse).toBe(false);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('FEMA / RBI/ Exchange control Regulations | Global Family Office | Multinational Business Structuring');
  });

  it('should have multinational structuring content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('international structuring');
    expect(component.sections.paragraphs[1]).toContain('cross-border wealth structuring');
  });
});
