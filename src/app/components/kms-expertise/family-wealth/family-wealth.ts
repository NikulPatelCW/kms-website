import { Component } from '@angular/core';
import { CommonImgAndContent } from "../../../shared/components/common-img-and-content/common-img-and-content";

@Component({
  selector: 'app-family-wealth',
  imports: [CommonImgAndContent],
  templateUrl: './family-wealth.html',
  styleUrl: './family-wealth.scss',
})
export class FamilyWealth {
  headerBg = 'assets/images/expertise/wealth.jpg';
  headerTitle = 'Family Wealth';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'Managing family wealth requires sensitivity, long-term vision, and deep expertise across legal, financial, and relational dynamics. At KMS, we offer holistic family wealth advisory services, enabling families to preserve, maximize, and transfer their wealth in accordance with their objectives and values across generations. We assist families with structuring family assets, establishing governance frameworks, tax optimization, philanthropy, and succession planning, ensuring harmony and managing emotional balances. Our services go beyond basic financial advice by integrating wealth creation, preservation, and transfer strategies.',
      'Our goal is to align family values with financial decisions, ensuring continuity, transparency, and harmony within family businesses or investment entities. We bring clarity to complex inter-generational wealth transitions and help craft resilient frameworks that sustain purpose-driven capital. Our personalized, confidential approach is rooted in trust and built around your familys unique needs and legacy goals. We deliver integrated solutions that balance tradition with modern asset strategies.',
    ],
    note: 'Family Governance | Family Enterprise Solutions | Family Trusts | Liability /Obligation Management | Wealth Optimisation',
    image: 'assets/images/expertise/wealth-img.jpg',
    contentBgImage: false,
    reverse: false,
  };
}
