import { Component, HostListener, inject, OnInit } from '@angular/core';
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
export class Header implements OnInit {
  // private router = inject(Router);
  private commonUtils = inject(CommonUtils);
  isDropdownOpen = false;
  isHome = false;
  isSticky = false;
  isMobileDropdownOpen = false; // Add this line
  showScrollToTop = false;
  scrollProgress = 0;
  scrollProgressOffset = 0;
  
  get circleCircumference(): number {
    // Calculate circumference based on screen size
    // Desktop: r=26, Tablet: r=20, Mobile: r=18
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 575) {
        return 2 * Math.PI * 18; // Mobile
      } else if (width <= 991) {
        return 2 * Math.PI * 20; // Tablet
      }
    }
    return 2 * Math.PI * 26; // Desktop (default)
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isSticky = window.scrollY > 40;
    this.updateScrollProgress();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScrollProgress();
  }

  ngOnInit() {
    this.updateScrollProgress();
  }

  private updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollableHeight = documentHeight - windowHeight;
    
    if (scrollableHeight > 0) {
      this.scrollProgress = (scrollTop / scrollableHeight) * 100;
      this.showScrollToTop = scrollTop > 300; // Show button after scrolling 300px
    } else {
      this.scrollProgress = 0;
      this.showScrollToTop = false;
    }
    
    // Calculate stroke-dashoffset (0 = full circle, circumference = no progress)
    const circumference = this.circleCircumference;
    this.scrollProgressOffset = circumference - (this.scrollProgress / 100) * circumference;
  }

  scrollToTop() {
    this.commonUtils.scrollToTop();
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
