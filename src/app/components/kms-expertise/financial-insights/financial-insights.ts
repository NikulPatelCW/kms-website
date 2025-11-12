import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-financial-insights',
  imports: [CommonImgAndContent],
  templateUrl: './financial-insights.html',
  styleUrl: './financial-insights.scss',
})
export class FinancialInsights {
  headerBg = 'assets/images/expertise/financial.png';
  headerTitle = 'Financial Insights';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'KMS offers financial insights that align capital strategy with value creation, operational goals, and long-term vision. We help clients make informed financial decisions and optimize resource allocation through in-depth analysis, planning, and strategic guidance. Whether it’s fundraising, investor communication, debt restructuring, or working capital optimization, we bring clarity and direction to financial planning while proactively addressing risks and liabilities.',
      'We also help promoters and family offices assess investment opportunities, evaluate ROI, and plan liquidity events, bridging efficiency gaps in the process. In times of transition, such as M&A, succession, or exit, we ensure that financial posture supports strategic decisions. Our insights are grounded in realism and driven by data, enabling agility in volatile environments. Through the alignment of financial processes with your mission and vision, KMS helps you build long-term value and turn financial intelligence into a competitive advantage.',
    ],
    note: 'Return Optimisation | Capital Structures | Due Diligence | Corp Finance Functions',
    image: 'assets/images/expertise/financial-img.png',
    contentBgImage: false,
    reverse: true,
  };
}
