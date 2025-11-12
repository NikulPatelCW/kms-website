import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-multinational-overseas-structuring',
  imports: [CommonImgAndContent],
  templateUrl: './multinational-overseas-structuring.html',
  styleUrl: './multinational-overseas-structuring.scss',
})
export class MultinationalOverseasStructuring {
  headerBg = 'assets/images/expertise/tech.png';
  headerTitle = 'Multinational / Overseas Structuring';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'Global business requires a carefully crafted positioning strategy that balances regulatory compliance, tax efficiency, and business goals. KMS offers comprehensive or required advisory on international structuring, offshore entities, regulatory frameworks (like FEMA, OECD guidelines), FTA, Investment Protection aspects and jurisdiction selection. We help Indian businesses expand overseas and foreign businesses establish or restructure their India operations. Our approach is rooted in commercial viability and legal soundness, making global operations simpler, safer, and compliant.',
      'For families and promoters, we also advise on cross-border wealth structuring, repatriation planning, and compliance under India’s FEMA regulations, policies and guidelines. We consider Domestic laws, double taxation treaties, reporting frameworks, and operational feasibility. From structuring international holding structures to managing transfer pricing issues, we ensure your overseas ambitions are well-supported.',
    ],
    note: 'FEMA / RBI/ Exchange control Regulations | Global Family Office | Multinational Business Structuring',
    image: 'assets/images/expertise/multinational-img.png',
    contentBgImage: false,
    reverse: false,
  };
}
