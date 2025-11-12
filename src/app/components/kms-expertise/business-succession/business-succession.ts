import { Component } from '@angular/core';
import { CommonImgAndContent } from "../../../shared/components/common-img-and-content/common-img-and-content";

@Component({
  selector: 'app-business-succession',
  imports: [CommonImgAndContent],
  templateUrl: './business-succession.html',
  styleUrl: './business-succession.scss',
})
export class BusinessSuccession {
  headerBg = '/assets/images/expertise/succession.png';
  headerTitle = 'Business Succession';
  headerSubTitle = 'Home - KMS Expertise';
  sections = {
    title: '',
    paragraphs: [
      'It is not just about transition; it’s about continuity, capability, and culture. KMS provides tailored succession planning services for business owners and family offices looking to ensure a seamless and sustainable leadership structuring and handover. We conduct a thorough assessment of the current organizational landscape, leadership aspects, and future readiness. Our approach combines legal and financial aspects to create a comprehensive succession roadmap. We facilitate structured planning that avoids disruptions, ensures operational consistency, and preserves stakeholder confidence while having built-in flexibility.',
      'We also help in identifying, mentoring, and positioning next-generation leaders while setting up governance mechanisms that reduce conflict and ensure accountability. Succession, done right, is an enabler of growth, and our mission is to make it an empowering process for all involved. With KMS, you secure not just successors but also your strategic visions continuity.'
    ],
    image: '/assets/images/expertise/business-succession.png',
    contentBgImage: false,
    reverse: true,
  };
}
