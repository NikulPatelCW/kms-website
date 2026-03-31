import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { isPlatformBrowser } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-home',
  imports: [SharedImports, TimelineModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  isMobile = false;

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  showMore = signal(false);
  carouselOptions: OwlOptions = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    URLhashListener: true,
    startPosition: 'URLHash',
  };

  slides = [
    { id: 'slide1', title: 'First Slide', img: 'assets/img1.jpg' },
    { id: 'slide2', title: 'Second Slide', img: 'assets/img2.jpg' },
    { id: 'slide3', title: 'Third Slide', img: 'assets/img3.jpg' },
  ];

  processData: { title: string; details: string[] }[] = [
    {
      title: '1981-85',
      details: [
        'Taxation Planning & Advisory',
        'Strategic Advisory',
        'Legal/Commercial Advisory',
        'JV & Technology Transfer Relationships',
        'Legal-commercial & Documentation',
        'FEMA & Exchange Controls',
      ],
    },
    {
      title: '1985-90',
      details: [
        'Business Concepts, Projects & Implementation Advisory',
        'Fund Raising, IPO, Private Equity Advisory',
        'Transaction Advisory',
      ],
    },
    {
      title: '1990-95',
      details: ['Due Diligence', 'PE Investment Advisory', 'Public Offering', 'Structuring & Restructuring'],
    },
    {
      title: '1995-2000',
      details: ['Telecom Infra & Power Project', 'Turnaround & Revival Advisory'],
    },
    {
      title: '2000-2005',
      details: ['Arbitration & Litigation Support', 'Cross-border Business Expansion'],
    },
    {
      title: '2005-2010',
      details: ['Business Strategic Advisory', 'SEZ & Industrial Parks', 'Corporate Governance', 'Functional & Process Evaluation'],
    },
    {
      title: '2010-2015',
      details: ['Microfinance, Venture Funds, AIF, Investment & Structuring Advisory'],
    },
    {
      title: '2015-2020',
      details: ['Succession Planning & Management', 'Family Offices', 'Technology Business Initiatives', 'Strategic Investments', 'Overseas Infra Projects'],
    },
    {
      title: '2020-2022',
      details: ['Entrepreneur Mentoring & Support Services', 'Fintech Initiatives', 'Advanced Tech Initiatives'],
    },
  ];
  kmsFeature = [
    {
      imgUrl: 'assets/images/about/customer.svg',
      title: 'Client centered',
      description:
        'We make it our business to understand what is important to our clients. Listening to client challenges is the foundation for creating and advising solutions that best suit the need. We skillfully combine our expertise and capabilities across diverse verticals to help reach your goals.',
    },
    {
      imgUrl: 'assets/images/about/time-management.svg',
      title: 'Power of integration',
      description:
        'We connect services, verticals, associations, and experience across different industries to generate solutions. Expertise from over 45 years, people and associations worked with connect seamlessly to deliver the best and create strength from connections.',
    },
    {
      imgUrl: 'assets/images/about/contract.svg',
      title: 'Responsibility built-in',
      description:
        'Responsibility is built into everything we do. Doing the right thing for our clients and their business is fundamental to our legacy and long-term success. We act and advise as per the need of the hour, delivering positive and long-term change responsibly.',
    },
    {
      imgUrl: 'assets/images/about/thumb-up.svg',
      title: 'Collaborate to innovate',
      description:
        'Our extended associations and people act as one team. Bringing together our knowledge, skill, and expertise across all disciplines, sectors, and industries, we are able to unearth the true goal and actions needed to get your business to great heights.',
    },
  ];
  ngOnInit() {
    this.checkMobile();
    // Auto-start video when home page loads
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.playVideo(), 100);
    }
  }

  checkMobile() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 991;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.playVideo();
    });
  }

  playVideo() {
    if (isPlatformBrowser(this.platformId) && this.heroVideo?.nativeElement) {
      const video = this.heroVideo.nativeElement;
      video.muted = true;
      video.autoplay = true;
      if (typeof video.play === 'function') {
        video.play().catch(() => {});
      }
    }
  }
}
