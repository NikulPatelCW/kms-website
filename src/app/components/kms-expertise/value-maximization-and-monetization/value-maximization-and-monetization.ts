import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-value-maximization-and-monetization',
  imports: [CommonImgAndContent],
  templateUrl: './value-maximization-and-monetization.html',
  styleUrl: './value-maximization-and-monetization.scss',
})
export class ValueMaximizationAndMonetization {
  headerBg = 'assets/images/expertise/wealth.jpg';
  headerTitle = 'Value Maximization And Monetization';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'At KMS, we focus not just on creating value but on ensuring its timely realisation in tangible, measurable terms. Our value maximization services revolve around identifying under-leveraged assets, untapped business potential, and operational inefficiencies. We craft strategies that unlock performance, be it through business restructuring, capital optimization, or strategic exits.',
      'For promoters, we design exit strategies and investment narratives that enhance valuation. For businesses, we enable operational turnaround, asset monetisation, and cost rationalisation initiatives. With diagnostics and performance benchmarking, we help clients make course corrections and strategic shifts with precision. Our solutions ensure that potential is not just identified but realized. With KMS, your value story becomes a value outcome.',
    ],
    note: 'Deal Value creation | Funding Options & IPO Planning | Monetisation and Exit strategies',
    image: 'assets/images/expertise/value-maximization.jpg',
    contentBgImage: false,
    reverse: false,
  };
}
