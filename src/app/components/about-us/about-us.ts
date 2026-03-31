import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedImports } from '../../shared/shared-imports'

@Component({
  selector: 'app-about-us',
  imports: [SharedImports],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs implements OnInit, AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  headerBgPath = 'assets/images/about-us-hero-bg.jpg';
  headerImgStyle: any = { 'background-image': `url(${this.headerBgPath})` };
  isMobile = false;
  showLeftArrow = false;
  showRightArrow = true;

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
    this.updateArrows();
  }

  ngOnInit() {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
    this.checkMobile();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.centerFirstCard();
      this.updateArrows();
    });
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 991;
  }

  knowKMSData: { title: string; details: string[] }[] = [
    {
      title: 'A Robust Team',
      details: [
        'More than 45 years of experience in corporate, family and promoter advisory and consultancy',
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
      title: 'Consortium of Experts',
      details: [
        'Investment & wealth advisory and management, merchant banking, I banking & other finance functions',
        'Overseas relationship',
        'Due diligence',
        'Taxation & transfer pricing',
        'FEMA & Exchange regulations',
        'Compliance & secretarial',
      ],
    },
    {
      title: 'Scientific Way of Working',
      details: [
        'Special fusion of business savvy and scientific expertise',
        'Comprehend the nuances of organizational dynamics',
        'Insights for well-informed business decisions',
        'Identify blind spots and provide fresh perspective',
        'Research-based client solutions',
      ],
    },
    {
      title: 'Comprehensive Services',
      details: [
        'Comprehensive suite of advisory services - structuring, legal-commercial, taxation, succession etc',
        'Tailor-made solutions as per client needs'
      ],
    },
    {
      title: 'Specific Services',
      details: [
        'A gamut of standalone services',
        'Addresses the needs of businesses and families'
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

  centerFirstCard() {
    const el = this.scrollContainer?.nativeElement;
    if (!el) return;
    const firstCard = el.querySelector('.home-know-kms-content-card') as HTMLElement;
    if (!firstCard) return;

    const scrollTo = firstCard.offsetLeft - (el.clientWidth - firstCard.offsetWidth) / 2;
    el.scrollLeft = scrollTo;
  }

  onScroll() {
    this.updateArrows();
  }

  updateArrows() {
    const el = this.scrollContainer?.nativeElement;
    if (!el) return;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth - 5;
  }

  scroll(direction: 'left' | 'right') {
    const el = this.scrollContainer.nativeElement;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }
  processData: { title: string; details: string[] }[] = [
    {
      title: 'Discovery',
      details: ['Business, financial checks', 'Legal-commercial, taxation checks'],
    },
    {
      title: 'Advisory & Solution',
      details: ['Value-added solutions', 'Strategy to Create Value and Alignment'],
    },
    {
      title: 'Implementation Strategies',
      details: ['Planning & Management', 'Positive Outcome'],
    },
    // {
    //   title: 'Review & Monitoring',
    //   details: ['Performance evaluation', 'Review objectives and actions meeting expectations'],
    // },
  ];
}
