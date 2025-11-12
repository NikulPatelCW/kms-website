import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isDropdownOpen).toBe(false);
    expect(component.isHome).toBe(false);
    expect(component.isSticky).toBe(false);
  });

  it('should have 11 expertise items', () => {
    expect(component.expertiseList.length).toBe(11);
  });

  it('should have correct expertise labels', () => {
    const expectedLabels = [
      'Business Advisory',
      'Family Wealth',
      'Value Maximization and Monetization',
      'Business Succession',
      'Structuring and Restructuring',
      'Financial Insights',
      'Inorganic Growth Strategies',
      'Tech & Disruptive Businesses',
      'Multinational / Overseas Structuring',
      'Tax Efficiencies',
      'Legal - Commercial'
    ];
    
    component.expertiseList.forEach((item, index) => {
      expect(item.label).toBe(expectedLabels[index]);
    });
  });

  it('should set isSticky to true when scrollY > 40', () => {
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
    component.onScroll();
    expect(component.isSticky).toBe(true);
  });

  it('should set isSticky to false when scrollY <= 40', () => {
    Object.defineProperty(window, 'scrollY', { value: 30, writable: true });
    component.onScroll();
    expect(component.isSticky).toBe(false);
  });

  it('should call commonUtils.scrollToTop on handleRouterChange', () => {
    spyOn(component['commonUtils'], 'scrollToTop');
    component.handleRouterChange();
    expect(component['commonUtils'].scrollToTop).toHaveBeenCalled();
  });

  it('should have correct router links for expertise items', () => {
    const expectedRoutes = [
      'kms-expertise/business-advisory',
      'kms-expertise/family-wealth',
      'kms-expertise/value-maximization',
      'kms-expertise/business-succession',
      'kms-expertise/structuring'
    ];
    
    expectedRoutes.forEach((route, index) => {
      expect(component.expertiseList[index].routerLink).toBe(route);
    });
  });
});
