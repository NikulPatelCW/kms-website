import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-business-advisory',
  imports: [CommonImgAndContent],
  templateUrl: './business-advisory.html',
  styleUrl: './business-advisory.scss',
})
export class BusinessAdvisory {
  headerBg = 'assets/images/expertise/business.jpg';
  headerTitle = 'Business Advisory';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'At KMS, our business advisory services are designed to catalyze growth while ensuring stability and long-term value creation. We offer a full spectrum of support, including customized business planning, financial insights, and Legal-commercial advice.',
      'Our team partners with clients to identify critical business challenges, and our guidance extends to new market entry, uncharted territory advisory, strategic alliance formation, risk management, and improved corporate governance. Leveraging deep sectoral knowledge, financial insight, and strategic foresight, we provide actionable strategies backed by hands-on implementation support.',
      'Whether youre scaling operations, navigating change, innovating in developing sectors, or restructuring business models, our scientific and process-driven approach ensures recommendations that are viable and measurable in impact. Through active collaboration, we help businesses position themselves to capitalize on market opportunities while mitigating risk. From planning to execution, our business advisory is geared to fuel consistent performance and foster a brighter future for your enterprise.'
    ],
    note:'Corporate Governance | Growth & Positioning | Innovation Strategy & Delivery | Management Strategies',
    image: 'assets/images/expertise/business-advisory-img.jpg',
    contentBgImage: true,
    reverse: false,
  };
}
