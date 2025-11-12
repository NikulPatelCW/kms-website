import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-about-us',
  imports: [SharedImports, TimelineModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  headerBgPath = 'assets/images/about-us-hero-bg.png';
  headerImgStyle: any = { 'background-image': `url(${this.headerBgPath})` };
  ngOnInit() {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
  }

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
        'We connect services, verticals, associations, and experience across different industries to generate solutions. Expertise from over 40+ years, people and associations worked with connect seamlessly to deliver the best and create strength from connections.',
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
      'Transaction Advisory'
    ]
  },
  {
    title: '1990-95',
    details: [
      'Due Diligence',
      'PE Investment Advisory',
      'Public Offering',
      'Structuring & Restructuring'
    ]
  },
  {
    title: '1995-2000',
    details: [
      'Telecom Infra & Power Project',
      'Turnaround & Revival Advisory'
    ]
  },
  {
    title: '2000-2005',
    details: [
      'Arbitration & Litigation Support',
      'Cross-border Business Expansion'
    ]
  },
  {
    title: '2005-2010',
    details: [
      'Business Strategic Advisory',
      'SEZ & Industrial Parks',
      'Corporate Governance',
      'Functional & Process Evaluation'
    ]
  },
  {
    title: '2010-2015',
    details: [
      'Microfinance, Venture Funds, AIF, Investment & Structuring Advisory'
    ]
  },
  {
    title: '2015-2020',
    details: [
      'Succession Planning & Management',
      'Family Offices',
      'Technology Business Initiatives',
      'Strategic Investments',
      'Overseas Infra Projects'
    ]
  },
  {
    title: '2020-2022',
    details: [
      'Entrepreneur Mentoring & Support Services',
      'Fintech Initiatives',
      'Advanced Tech Initiatives'
    ]
  }
    
  ];
}
