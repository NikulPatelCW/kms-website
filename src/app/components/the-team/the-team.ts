import { Component, OnInit } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';

export interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  image: string;
  /** When true, caps advisory-section image to 95% width on large screens */
  constrainDesktopImage?: boolean;
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
    'We are a team of thinkers and doers - Chartered Accountants, Advocates, Lawyers, Technologists, and Strategists - working collaboratively to deliver tailored solutions that drive growth, innovation, and long-term value for our clients. Every member brings a unique perspective, enriching how we understand challenges and shape outcomes.',
  ];

  teamMembers: TeamMember[] | any = [
    {
      name: 'Mr. Vinod Modha',
      // role: 'Senior Partner',
      tagline: 'Strategic advisor to Families & Businesses on governance, growth, and legacy.',
      bio: [
        'Mr Vinod Modha, a Chartered Accountant by profession with a rich professional experience of 45+ years in Strategic Advisory, Legal commercial Documentation and Succession Planning, brings a refined and pragmatic approach to Corporates and families for advisory and consultancy. With rich and extensive experience working with corporates and promoters, he has served on the boards of several companies before assuming the role of a strategic advisor to promoters of mid- and large-scale enterprises.',
        'He has built and leads a handpicked team of trained and experienced professionals with deep expertise in advisory, consulting, handholding, and implementation strategies. A shared commitment to excellence and client outcomes defines the team’s approach.',
        'Under his guidance, the KMS team has supported several organizations in successful business expansion initiatives, including multinational corporations. His work has been instrumental in delivering strategic advisory, structuring, succession planning, family office solutions, and allied advisory services to Promoter families.',
      ],
      image: 'assets/images/team/vinodModha_img.png',
    },
    {
      name: 'Rounak Jain',
      tagline: 'Advises Businesses and families on financial structuring, analysis, and succession.',
      bio: [
        'Rounak Jain is a Chartered Accountant and Senior Advisor who works closely with promoter-led businesses and family enterprises to bring clarity, structure, and discipline to critical business and family decisions.',
        'With over eight years of professional experience, including more than five years with KMS, Rounak has evolved from a Financial Analyst into a trusted advisor, supporting promoters and leadership teams across business structuring, financial insights, and succession-related matters. His approach combines analytical depth with practical execution, ensuring that strategies are not only well-designed but also effectively implemented.',
        'His core areas of engagement include business and financial structuring, restructuring initiatives, finance function strengthening, decision-support analysis, and succession planning for family-owned enterprises. In addition, he supports businesses and families through financial and investment monitoring, covering both operating entities and investments made by promoter families. This includes ongoing evaluation of performance, assessment of capital deployment, review of returns and risks, and identification of monetisation or realignment opportunities as circumstances evolve.',
        'Working at the intersection of business, finance, and family dynamics, he helps promoters navigate complexity, assess alternatives, and make well-informed long-term decisions backed by data, discipline, and continuous oversight.',
        'Known for his structured thinking, financial discipline, and execution focus, Rounak plays a key role in converting complex financial and strategic challenges into clear, actionable, and sustainable solutions. He collaborates closely with promoters, family members, and senior management to align financial frameworks with ownership objectives, governance requirements, and growth ambitions.',
        'At KMS, his work reflects the firm’s commitment to confidential, client-centric, and purpose-driven advisory, seamlessly integrating financial, legal, and business perspectives to support enterprises and families in building resilient structures and enduring legacies.'
      ],
      image: 'assets/images/team/rounakJain_img.png',
      constrainDesktopImage: true,
    },
    {
      name: 'Bhavya Shah',
      tagline:
        'Legal and corporate advisor specializing in commercial documentation, family office, IP strategy, and succession frameworks.',
      bio: [
        'Bhavya Shah is a legal and corporate professional specializing in commercial documentation, intellectual property structuring, and succession planning frameworks.',
        'He heads the Legal and Documentation Advisory practice, focusing on corporate and commercial documentation, investment and ownership structuring, intellectual property protection and commercialization, and succession planning for promoter-led and family-owned enterprises.',
        'He holds a B.A. LL.B. (Hons.) and an LL.M. in Intellectual Property Rights, combining strong academic grounding with hands-on experience in complex commercial and governance matters.',
        'His practice involves structuring commercial and investment arrangements, developing ownership and governance frameworks, and preparing estate and family governance documentation to ensure business continuity and smooth inter-generational transition.',
        'He is known for his clarity in drafting and his ability to translate business objectives into precise, commercially aligned legal documentation.'
      ],
      image: 'assets/images/team/bhavyaShah_img.png',
    },
    {
      name: 'Jaimin Chohan',
      tagline: 'Strategic operations leader specializing in governance, compliance, and process optimization.',
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
