import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-tech-and-disruptive-businesses',
  imports: [CommonImgAndContent],
  templateUrl: './tech-and-disruptive-businesses.html',
  styleUrl: './tech-and-disruptive-businesses.scss',
})
export class TechAndDisruptiveBusinesses {
  headerBg = 'assets/images/expertise/tech.png';
  headerTitle = 'Tech & Disruptive Businesses';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'In today’s rapidly evolving landscape, technology-driven and disruptive businesses need a different kind of advisory, agile, visionary, and grounded in execution. At KMS, we support tech startups and innovation-led enterprises by offering strategic insights into business model validation, regulatory frameworks, and go-to-market strategies. From early-stage structuring to scaling and investment readiness, we bridge the gap between vision and operational viability. Our team brings a multidisciplinary approach, combining legal, financial, and sector-specific knowledge to navigate uncertainty and create lasting value. We also assist in ecosystem mapping, valuation strategies, and fundraising structuring, helping founders avoid common pitfalls.',
      'In addition to our work with high-growth startups, we conceptualize and help add digital and disruptive business dimensions to traditional or existing businesses, ensuring they remain competitive in the face of rapid transformation. Whether it’s IP identification protection, compliance, capital planning, or value maximization, our solutions are geared to future-proof your disruptive business. With KMS, innovation meets implementation with precision and foresight.',
    ],
    note: 'Tech Adoption/Integration | Artificial Intelligence | IT Risk Advisory | Technology Advisory | Digitization and e-Business',
    image: 'assets/images/expertise/tech-img.png',
    contentBgImage: false,
    reverse: false,
  };
}
