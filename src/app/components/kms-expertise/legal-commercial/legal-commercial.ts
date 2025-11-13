import { Component } from '@angular/core';
import { CommonImgAndContent } from "../../../shared/components/common-img-and-content/common-img-and-content";

@Component({
  selector: 'app-legal-commercial',
  imports: [CommonImgAndContent],
  templateUrl: './legal-commercial.html',
  styleUrl: './legal-commercial.scss',
})
export class LegalCommercial {
  headerBg = 'assets/images/expertise/legal.jpg';
  headerTitle = 'Legal-Commercial';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'KMS provides end-to-end legal-commercial advisory services that empower businesses to operate with clarity and confidence. We can serve a diverse clientele, including corporations, financial institutions, investors, family businesses, and family offices, assisting them across various legal-commercial domains: corporate structuring, contracts, shareholder agreements, joint ventures, and dispute avoidance and resolution strategies. Our strength lies in translating complex legal landscapes into practical, business-ready solutions. With a commercially aligned mindset, we help businesses minimize legal and financial risks while optimizing outcomes in transactions, partnerships, and strategic decisions.',
      'We also assist clients in identifying red flags early and protect stakeholder interests. For family offices, we assist and ensure smooth documentation of ownership, succession, and intergenerational transfers. Our team works closely with law firms, compliance professionals, and internal stakeholders to ensure holistic support. With KMS, legal strategies are seamlessly integrated with your broader business vision.'
    ],
    note: 'Corporate and commercial Law | FEMA/RBI Regulations | Personal Laws | Mercantile and Economic Laws | IPRs | Commercial Relationships',
    image: 'assets/images/expertise/legal-img.jpg',
    contentBgImage: false,
    reverse: true,
  };
}
