import { Component, OnInit } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';

export interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
}

@Component({
  selector: 'app-the-team',
  imports: [SharedImports],
  templateUrl: './the-team.html',
  styleUrl: './the-team.scss',
})
export class TheTeam implements OnInit {
  headerBgPath = 'assets/images/about-us-hero-bg.jpg';
  headerImgStyle: Record<string, string> = {
    'background-image': `url(${this.headerBgPath})`,
  };

  introTitle = 'Who We Are?';
  introParagraphs = [
    'At KMS Strategic Advisors Pvt Ltd, our strength lies in our people - a diverse and dynamic group of professionals united by a shared commitment to excellence, strategic thinking, and entrepreneurial spirit. With decades of collective experience across industries and functions, our team brings deep expertise, practical problem-solving skills, and client-first dedication to every engagement.',
    'We are a multidisciplinary team of thinkers and doers - Chartered Accountants, Advocates, Lawyers, Technologists, and Strategists - working collaboratively to deliver tailored solutions that drive growth, innovation, and long-term value for our clients. Every member brings a unique perspective, enriching how we understand challenges and shape outcomes.',
  ];

  teamMembers: TeamMember[] | any = [
    {
      name: 'Mr. Vinod Modha',
      role: 'Senior Partner',
      tagline: 'Strategic advisor to Families & Businesses on governance, growth, and legacy.',
      bio: [
        'Mr. Vinod Modha is a Chartered Accountant with 45+ years of experience in strategic advisory, legal commercial documentation, and succession planning. Having served on the boards of several companies, he now acts as a strategic advisor to promoters and mid- & large-scale enterprises.',
        'He leads a handpicked team of seasoned professionals at KMS, guiding organisations through business expansion, structuring, succession planning, and family office solutions, with a strong track record of serving promoter families and multinational corporations alike.',
      ],
      image: 'assets/images/team/vinodModha_img.png',
    },
    {
      name: 'Rounak Jain',
      tagline: 'Advisor to Businesses and families on financial structuring, analysis, and succession.',
      bio: [
        'Rounak Jain is a Chartered Accountant and Senior Advisor with 8+ years of experience, , specialising in advisory services for promoter-led businesses and family enterprises. He works across business and financial structuring, restructuring, finance function strengthening, decision-support analysis, and succession planning, complemented by ongoing financial and investment monitoring.',
        'Combining analytical rigour with practical execution, he works at the intersection of business, finance, and family dynamics, collaborating with promoters, family members, and senior management to align financial & operational frameworks with ownership objectives and governance requirements, converting complex challenges into clear, actionable, and sustainable solutions.',  
      ],
      image: 'assets/images/team/rounakJain_img.png',
    },
    {
      name: 'Bhavya Shah',
      tagline:
        'Legal and corporate advisor specializing in commercial documentation, family office, IP strategy, and succession frameworks.',
      bio: [
        'Bhavya Shah is a legal and corporate professional heading the Legal and Documentation Advisory practice at KMS. Holding a B.A. LL.B. (Hons.) and an LL.M. in Intellectual Property Rights, he specialises in commercial documentation, investment and ownership structuring, intellectual property protection, and succession planning for promoter-led and family-owned enterprises. ',
        'Known for his clarity in drafting, he translates complex business objectives into precise, commercially aligned legal frameworks that support governance and inter-generational transition.',
      ],
      image: 'assets/images/team/bhavyaShah_img.png',
    },
    {
      name: 'Jaimin Chohan',
      tagline: 'Strategic operations leader specializing in governance, compliance, and process optimization.Strategic operations leader specializing in governance, compliance, and process optimization.',
        bio: [
          'Jaimin Chohan is a strategic operations and analytics leader with 20+ years of experience in governance, compliance, and process excellence. He brings advanced capabilities in data analytics, SAP data interpretation, system optimisation, and reporting frameworks that support due diligence, financial projections, and statutory compliance. Jaimin also plays a key role in wealth and investment analytics, assisting leadership teams and promoters in capital allocation, investment performance tracking, and monetisation strategies.',
          'His academic background in commerce, software engineering, and electronic data processing underpins a structured, technology-driven approach to delivering scalable, insight-led business solutions.'
        ],
      image: 'assets/images/team/jaiminChohan_img.png',
    },
  ];

  ngOnInit() {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
  }
}
