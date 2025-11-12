import { Component } from '@angular/core';
import { CommonImgAndContent } from '../../../shared/components/common-img-and-content/common-img-and-content';

@Component({
  selector: 'app-structuring-and-restructuring',
  imports: [CommonImgAndContent],
  templateUrl: './structuring-and-restructuring.html',
  styleUrl: './structuring-and-restructuring.scss',
})
export class StructuringAndRestructuring {
  headerBg = 'assets/images/expertise/structuring.png';
  headerTitle = 'Structuring And Restructuring';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'KMS offers structuring and restructuring solutions and services aimed at optimizing entity design, improving operational agility, and ensuring long-term sustainability. Whether forming a new business, entering new markets, or consolidating legacy structures, we help craft the most effective legal, financial, and governance framework. Our restructuring strategies are particularly valuable in times of transition, distress, or growth reorientation. We consider regulatory compliance, stakeholder alignment, tax implications, and commercial viability to deliver comprehensive solutions. Our team works closely with promoters, investors, and advisors to ensure that structural shifts unlock real value and support future strategy. For family offices, we ensure continuity through estate and holding entity frameworks. For family wealth & businesses, we assist in carve-outs, mergers, demergers, and business vertical separations. With a process-driven mindset, we bring clarity and control to structural complexity.',
    ],
    note: 'Corporate Structuring | Ownership Structuring | Management & Control Structures | Restructuring and Turnaround Strategies',
    image: 'assets/images/expertise/structuring-img.png',
    contentBgImage: false,
    reverse: false,
  };
}
