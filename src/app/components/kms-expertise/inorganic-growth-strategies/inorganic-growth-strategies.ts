import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-inorganic-growth-strategies',
  imports: [CommonImgAndContent],
  templateUrl: './inorganic-growth-strategies.html',
  styleUrl: './inorganic-growth-strategies.scss',
})
export class InorganicGrowthStrategies {
  headerBg = 'assets/images/expertise/inorganic.jpg';
  headerTitle = 'Inorganic Growth Strategies';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'Growth through acquisition, strategic alliances, collaborations, and joint ventures can be a powerful catalyst when planned and executed well. KMS specializes in inorganic growth strategies that align with the organization’s vision, financial goals, and cultural fit. We support the full lifecycle, from opportunity identification and due diligence to deal structuring and post-deal integration. Our experience spans sectors and transaction types, enabling us to spot synergies, avoid traps, and create tangible value. We guide promoters and boards through regulatory, commercial, and financial nuances to ensure seamless execution.',
      'Whether it’s local expansion or international entry, we act as both strategic advisors and Transactional support partners. We also bring a strong network of ecosystem connects, lawyers, bankers, tax advisors that strengthens our execution support capabilities. KMS ensures your inorganic moves lead to sustainable, long-term growth.',
    ],
    note: 'Joint Venture | Strategic Alliances | Deal/Transactional Structuring | Post-acquisition integration & Consolidation',
    image: 'assets/images/expertise/inorganic-img.jpg',
    contentBgImage: false,
    reverse: false,
  };
}
