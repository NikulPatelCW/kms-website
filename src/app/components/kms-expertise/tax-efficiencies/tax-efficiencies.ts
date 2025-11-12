import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-tax-efficiencies',
  imports: [CommonImgAndContent],
  templateUrl: './tax-efficiencies.html',
  styleUrl: './tax-efficiencies.scss',
})
export class TaxEfficiencies {
  headerBg = '/assets/images/expertise/tax.png';
  headerTitle = 'Tax Efficiencies';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'Effective tax planning & execution is more than just minimizing liability; it’s about aligning tax strategy with broader business and personal goals as well as value maximization. At KMS, we deliver nuanced tax advisory services that span direct, indirect, and international taxation landscapes. Our team proactively identifies tax optimization options while ensuring strict compliance with evolving regulatory frameworks. We advise on entities’ structuring transactions, investments, and business in a manner that is both efficient and legally robust. ',
      'We also analyze international tax implications—whether relating to a single country’s laws or several jurisdictions—and strategically evaluate investment protection agreements and Double Taxation Avoidance Agreements (DTAAs) to optimize cross-border tax outcomes.',
      'For high-net-worth individuals and families, we help structure personal wealth and cross-border assets to reduce exposure and enhance long-term financial health. Our tax diagnostics bring clarity to complex matters, helping clients make informed decisions with confidence. Whether you’re dealing with M&A, cross-border structures, or regulatory disclosures, we deliver clarity, savings, and peace of mind. Our approach is strategic, predictive, and tailored to your specific needs.',
    ],
    note: 'Direct Taxation | Tax Treaties | Transfer pricing | Global Taxation | Tax Efficiency and Structuring',
    image: '/assets/images/expertise/tax-img.png',
    contentBgImage: false,
    reverse: true,
  };
}
