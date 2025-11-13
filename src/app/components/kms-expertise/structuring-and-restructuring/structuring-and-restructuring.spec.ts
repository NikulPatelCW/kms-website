import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuringAndRestructuring } from './structuring-and-restructuring';

describe('StructuringAndRestructuring', () => {
  let component: StructuringAndRestructuring;
  let fixture: ComponentFixture<StructuringAndRestructuring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuringAndRestructuring],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuringAndRestructuring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('assets/images/expertise/structuring.jpg');
    expect(component.headerTitle).toBe('Structuring And Restructuring');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.paragraphs.length).toBe(1);
    expect(component.sections.image).toBe('assets/images/expertise/structuring-img.jpg');
    expect(component.sections.reverse).toBe(false);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Corporate Structuring | Ownership Structuring | Management & Control Structures | Restructuring and Turnaround Strategies');
  });

  it('should have structuring content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('structuring and restructuring solutions');
    expect(component.sections.paragraphs[0]).toContain('family offices');
  });
});
