import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';

@Component({
  selector: 'app-industries',
  imports: [SharedImports],
  templateUrl: './industries.html',
  styleUrl: './industries.scss',
})
export class Industries {
    headerBgPath = '/assets/images/header-bg/sector.png';
  headerImgStyle: any = { 'background-image': `url(${this.headerBgPath})` };
  ngOnInit() {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
  }
  knowKMSData: {  details: string[] }[] = [
    {
      details: [
        'Advertising, Media & Entertainment',
        'Agri & Food Processing',
        'Agritech',
        'Automotive',
        'Aviation & Shipping',
        'Transportation & Logistics',
        'Banking & NBFCs',
        'Capital Markets',
        'Finance / Venture Funds Insurance',
        'Charities & Trusts',
        'Chemicals & Fertilisers',
        'Consumer Products & Durables',
        'Education & Training',
      ],
    },
    {
      details: [
        'Energy & Resources',
        'Power, Utilities & Renewables Engineering',
        'Industrial Park / SEZ',
        'Infrastructure / Real Estate',
        'Life Sciences & Healthcare (including Ayurveda & Wellness)',
        'Pharmaceuticals',
        'Metals & Mining',
        'Oil & Gas',
        'Retail, Wholesale & Distribution',
        'Technology & Telecommunications',
        'Fintech, VDA & Tokenisation',
        'Textiles',
        'Tourism & Hospitality',
      ],
    },    
  ];

}
