import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyWealth } from './family-wealth';

describe('FamilyWealth', () => {
  let component: FamilyWealth;
  let fixture: ComponentFixture<FamilyWealth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyWealth],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyWealth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header properties', () => {
    expect(component.headerBg).toBe('assets/images/expertise/wealth.png');
    expect(component.headerTitle).toBe('Family Wealth');
    expect(component.headerSubTitle).toBe('Home - KMS Expertise');
  });

  it('should have sections with correct structure', () => {
    expect(component.sections).toBeDefined();
    expect(component.sections.title).toBe('');
    expect(component.sections.paragraphs.length).toBe(2);
    expect(component.sections.image).toBe('assets/images/expertise/wealth-img.png');
    expect(component.sections.contentBgImage).toBe(false);
    expect(component.sections.reverse).toBe(false);
  });

  it('should have correct note content', () => {
    expect(component.sections.note).toBe('Family Governance | Family Enterprise Solutions | Family Trusts | Liability /Obligation Management | Wealth Optimisation');
  });

  it('should have family wealth content in paragraphs', () => {
    expect(component.sections.paragraphs[0]).toContain('family wealth');
    expect(component.sections.paragraphs[1]).toContain('align family values');
  });
});
