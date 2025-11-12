import { Component, HostListener, inject } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { Footer } from "../footer/footer";
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs';
import { CommonUtils } from '../../core/commonUtils';

@Component({
  selector: 'app-header',
  imports: [SharedImports, Footer],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // private router = inject(Router);
  private commonUtils = inject(CommonUtils);
  isDropdownOpen = false;
  isHome = false;
  isSticky = false;
  isMobileDropdownOpen = false; // Add this line
  @HostListener('window:scroll')
  onScroll() {
    this.isSticky = window.scrollY > 40;
  }

  // constructor() {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((event: any) => {
  //       this.isHome = event.urlAfterRedirects === '/home';
  //     });
  // }
  expertiseList = [
    { label: 'Business Advisory', routerLink: 'kms-expertise/business-advisory' },
    { label: 'Family Wealth', routerLink: 'kms-expertise/family-wealth' },
    { label: 'Value Maximization and Monetization', routerLink: 'kms-expertise/value-maximization' },
    { label: 'Business Succession', routerLink: 'kms-expertise/business-succession' },
    { label: 'Structuring and Restructuring', routerLink: 'kms-expertise/structuring' },
    { label: 'Financial Insights', routerLink: 'kms-expertise/financial-insights' },
    { label: 'Inorganic Growth Strategies', routerLink: 'kms-expertise/inorganic-growth' },
    { label: 'Tech & Disruptive Businesses', routerLink: 'kms-expertise/tech-businesses' },
    { label: 'Multinational / Overseas Structuring', routerLink: 'kms-expertise/multinational' },
    { label: 'Tax Efficiencies', routerLink: 'kms-expertise/tax-efficiencies' },
    { label: 'Legal - Commercial', routerLink: 'kms-expertise/legal-commercial' },
  ];

  handleRouterChange(){
    this.commonUtils.scrollToTop();
    this.isMobileDropdownOpen = false; // Close mobile dropdown on navigation
  }

  toggleMobileDropdown() {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
  }

  handleMobileExpertiseClick(routerLink: string) {
    this.handleRouterChange();
    this.isMobileDropdownOpen = false;
  }
}
