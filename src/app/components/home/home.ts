import { Component, ElementRef, OnInit, signal, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SharedImports],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  showLeftArrow = false;
  showRightArrow = true;
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
      title: 'Discovery',
      details: ['Financial health check', 'Legal and structural checks'],
    },
    {
      title: 'Advisory & Solution',
      details: ['Value-Added Solutions', 'Strategy to create value and alignment'],
    },
    {
      title: 'Implementation',
      details: ['Systematic Planning', 'Implementation Management'],
    },
    {
      title: 'Review & Monitoring ',
      details: ['Performance evaluation', 'Review objectives and actions meeting expectations'],
    },
  ];
  knowKMSData: { title: string; details: string[] }[] = [
    {
      title: 'A robust group',
      details: [
        'More than 40 years of experience in corporate, family and promoter advisory and consultancy',
        'Strong team of financial professionals',
        'Results-driven advice to clients',
        'Innovative and forward-thinking',
        'Comprehensive solutions that suit client requirements',
      ],
    },
    {
      title: 'KMS Network & Connects',
      details: [
        'Advocates & Legal Practitioners',
        'Chartered Accountants',
        'Company Secretaries',
        'Valuers',
        'Investment Advisors',
        'Investment Bankers',
        'Tax Advisors/ Consultants',
        'Technology Advisors and Developers',
        'Trustees & Compliance officers',
      ],
    },
    {
      title: 'Field Expertise – Consortium of Experts',
      details: [
        'Investment & wealth Advisory and Management, Merchant Banking, I Banking & Other finance Functions',
        'Overseas Relationship',
        'Due Diligence',
        'Taxation & Transfer pricing',
        'FEMA & Exchange Regulations',
        'Compliance & Secretarial',
      ],
    },
    {
      title: 'Scientific way of working',
      details: [
        'Special fusion of business savvy and scientific expertise',
        'Comprehend the nuances of organizational dynamics',
        'Insights for well-informed business decisions',
        'Identify blind spots and provide fresh perspective.',
        'Research-based client solutions',
      ],
    },
    {
      title: 'Interlinked services',
      details: [
        'Availability of a gamut of standalone services - structuring, legal-commercial, taxation',
        'Tailor-made solutions as per client needs',
        'Independent and interlinked services',
      ],
    },
     {
      title: 'Agile Transformation',
      details: [
        'A strategy-driven approach',
        'Promotes progress while delivering tangible results',
        'Defining objective and developing implementation strategy',
        'Research based finding and applications',
        'Transformative and future-ready solutions',
      ],
    },
  ];
  ngOnInit() {
    // Auto-start video when home page loads
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.playVideo(), 100);
    }
  }

   ngAfterViewInit():void {
    // Wait a tick to ensure layout is rendered before centering
    setTimeout(() => {
      this.playVideo();
      this.centerFirstCard();
      this.updateArrows();
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
   centerFirstCard() {
    const el = this.scrollContainer.nativeElement;
    const firstCard = el.querySelector('.home-know-kms-content-card') as HTMLElement;
    if (!firstCard) return;

    const scrollTo =
      firstCard.offsetLeft - (el.clientWidth - firstCard.offsetWidth) / 2;

    el.scrollLeft = scrollTo;
  }

  onScroll() {
    this.updateArrows();
  }

  updateArrows() {
    const el = this.scrollContainer.nativeElement;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth - 5;
  }

  scroll(direction: 'left' | 'right') {
    const el = this.scrollContainer.nativeElement;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }
}
