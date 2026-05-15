export interface LegalTableRow {
  type: string;
  purpose: string;
}

export interface LegalBlock {
  text?: string;
  items?: string[];
  rows?: LegalTableRow[];
}

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  breadcrumb: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
}

export type LegalContentKey = 'privacy-policy' | 'disclaimer' | 'cookie-policy' | 'terms-of-use';

export const LEGAL_CONTENT: Record<LegalContentKey, LegalDocument> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    breadcrumb: 'Home - Privacy Policy',
    lastUpdated: 'May 15, 2026',
    intro: [
      'This Privacy Policy explains how KMS Strategic Advisors LLP (“KMS”, “we”, “our”, “us”) collects, uses, processes, stores, protects and discloses Personal Data when you access or use our website (“Site”).',
      'By accessing the Site, submitting information through the contact form, or accepting cookies, you provide explicit consent to the handling of your Personal Data in accordance with this Policy and applicable laws in India, including the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000 along with associated Rules.',
    ],
    sections: [
      {
        title: '1. Definitions',
        blocks: [
          {
            items: [
              'Personal Data means any data about an individual who is identifiable by that data.',
              'Processing means collection, storage, retrieval, use, sharing, deletion, etc.',
              'Data Principal means the person to whom the Personal Data relates (You).',
              'Data Fiduciary means the entity determining the purpose and means of processing (KMS).',
            ],
          },
        ],
      },
      {
        title: '2. Categories of Personal Data Collected',
        blocks: [
          { text: 'KMS may collect the following categories of Personal Data:' },
          { text: '(A) Information You Provide Voluntarily' },
          { text: 'Through contact forms or email:' },
          {
            items: [
              'Full name',
              'Email address',
              'Phone number',
              'Company name',
              'Any additional information included in your message',
            ],
          },
          { text: '(B) Automatically Collected Data' },
          { text: 'Through cookies, analytics tools, and server logs:' },
          {
            items: [
              'IP address',
              'Browser type and version',
              'Device information',
              'Location (approximate)',
              'Page views and navigation behaviour',
              'Time and duration of website visits',
            ],
          },
          { text: 'We do not intentionally collect:' },
          {
            items: [
              'Aadhaar / PAN / financial information',
              'Sensitive personal data (health, biometric, etc.), Unless expressly provided by you for business purposes under a written engagement.',
            ],
          },
        ],
      },
      {
        title: '3. Purpose and Legal Basis of Processing',
        blocks: [
          { text: 'Your Personal Data is processed based on Consent for:' },
          {
            items: [
              'Responding to inquiries and communication requests',
              'Understanding Site usage patterns to improve user experience',
              'Website administration, troubleshooting, and security enhancement',
              'Compliance with legal obligations',
            ],
          },
          { text: 'KMS does not engage in:' },
          {
            items: [
              'Profiling for automated decision-making',
              'Selling or renting personal information',
            ],
          },
        ],
      },
      {
        title: '4. Data Sharing & Third-Party Disclosures',
        blocks: [
          { text: 'Your Personal Data may be shared with:' },
          {
            items: [
              'Website hosting providers',
              'IT security and system support providers',
              'Google Analytics or similar services (for traffic measurement purposes)',
            ],
          },
          {
            text: 'All third parties are required by contract or policy to implement appropriate data security measures and to use the data solely for authorized purposes.',
          },
          {
            text: 'We never share personal information for marketing by third parties.',
          },
        ],
      },
      {
        title: '5. Data Retention',
        blocks: [
          { text: 'Personal Data is retained only for:' },
          {
            items: [
              'As long as necessary to fulfil the purpose collected',
              'Legal/regulatory compliance where applicable',
              'Internal retention policies',
            ],
          },
          {
            text: 'Upon expiration of retention needs, data is securely deleted or anonymized.',
          },
        ],
      },
      {
        title: '6. Data Protection & Security Measures',
        blocks: [
          {
            text: 'We adopt reasonable technical and organizational safeguards to protect data against:',
          },
          {
            items: [
              'Unauthorized access',
              'Alteration',
              'Disclosure',
              'Accidental loss or destruction',
            ],
          },
          {
            text: 'However, no electronic system is entirely secure; KMS makes no absolute guarantees regarding data security.',
          },
        ],
      },
      {
        title: '7. Rights of Data Principals (Your Rights)',
        blocks: [
          { text: 'Under the DPDPA, you have the right to:' },
          {
            items: [
              'Access your Personal Data',
              'Correct or update inaccurate or incomplete data',
              'Withdraw consent at any time',
              'Request erasure where lawful',
              'File a grievance regarding data misuse',
            ],
          },
          {
            text: 'To exercise rights, contact our Grievance Officer below.',
          },
        ],
      },
      {
        title: '8. Consent & Withdrawal',
        blocks: [
          { text: 'By using this Site, you consent to:' },
          {
            items: ['Data collection and processing as detailed here', 'Use of cookies and analytics tracking'],
          },
          {
            text: 'Withdrawal of consent may affect access to or functionality of the Site.',
          },
        ],
      },
      {
        title: '9. Cross-Border Data Transfers',
        blocks: [
          {
            text: 'Some data may be processed or stored on servers outside India, including locations governed by less stringent data protection standards. By using the Site, you acknowledge and consent to such international data transfers.',
          },
        ],
      },
      {
        title: '10. External Links',
        blocks: [
          {
            text: 'This Policy does not apply to external/third-party websites linked from our Site.Please review their respective privacy policies independently.',
          },
        ],
      },
      {
        title: '11. Updates to the Policy',
        blocks: [
          {
            text: 'KMS reserves the right to revise this Policy from time to time. Latest version will always be posted on the Site with updated effective date.',
          },
          {
            text: 'Continued use of the Site constitutes acceptance of any changes.',
          },
        ],
      },
      {
        title: '12. Grievance Redressal',
        blocks: [
          { text: 'For any concerns regarding Personal Data, please contact:' },
          { text: 'Grievance Officer' },
          { text: 'KMS Strategic Advisors LLP' },
          {
            text: '302, 3rd Floor, Shivalik-10, SBI Zonal Office, Ambawadi, Ahmedabad, Gujarat – 380015',
          },
          { text: 'Email: info@kms-advisors.com' },
          { text: 'Response Time: Within 15 working days' },
        ],
      },
    ],
  },
  disclaimer: {
    title: 'Website Disclaimer',
    breadcrumb: 'Home - Disclaimer',
    lastUpdated: 'May 15, 2026',
    intro: [
      'The information provided on this website (“Site”) by KMS Strategic Advisors LLP (“KMS”, “we”, “our”, “us”) is intended solely for general informational and corporate presentation purposes.',
      'While KMS endeavors to provide accurate, updated, and reliable information, no assurance, guarantee or warranty (express or implied) is made regarding:',
    ],
    sections: [
      {
        title: '',
        blocks: [
          {
            items: [
              'Accuracy',
              'Completeness',
              'Suitability',
              'Reliability',
              'Timeliness',
              'Applicability of information',
            ],
          },
        ],
      },
      {
        title: 'Not Professional Advice',
        blocks: [
          { text: 'Nothing on this Site shall be construed as:' },
          {
            items: [
              'Legal opinion',
              'Strategic advisory',
              'Financial or tax advice',
              'Professional recommendations',
              'Invitation to engage services',
            ],
          },
          {
            text: 'Any decisions made based on Site content are at your sole discretion and risk.Users should seek qualified professional advice before taking any action.',
          },
        ],
      },
      {
        title: 'No Client Relationship',
        blocks: [
          { text: 'Accessing or communicating through this Site does not:' },
          {
            items: [
              'Create any advisory or client relationship',
              'Constitute a contractual engagement with KMS',
            ],
          },
          {
            text: 'Such relationships are established only through formal written agreements executed through authorized KMS channels.',
          },
        ],
      },
      {
        title: 'Third-Party Content & Links',
        blocks: [
          {
            text: 'The Site may contain external links or third-party references solely for user convenience.KMS:',
          },
          {
            items: [
              'Does not oversee or endorse third-party content',
              'Makes no representation concerning its accuracy or safety',
              'Is not responsible for any losses arising from its use',
            ],
          },
          {
            text: 'Users interact with third-party sites at their own risk.',
          },
        ],
      },
      {
        title: 'Technology and Security',
        blocks: [
          {
            text: 'KMS adopts reasonable measures to maintain secure operation of the Site.However, we do not guarantee that:',
          },
          {
            items: [
              'This Site will be error-free or uninterrupted',
              'The Site or hosted data is entirely secure',
              'The Site is free from viruses, malware, or harmful components',
            ],
          },
          {
            text: 'KMS shall not be liable for any technological issues impacting your devices, software, or data.',
          },
        ],
      },
      {
        title: 'Limitation of Liability',
        blocks: [
          {
            text: 'To the fullest extent permitted by applicable law, KMS shall not be responsible or liable for:',
          },
          {
            items: [
              'Any direct, indirect, incidental, special, exemplary, consequential, or punitive damages',
              'Loss of data, profits, business, goodwill, reputation, or anticipated benefits',
            ],
          },
          {
            text: 'arising out of your use or reliance on this Site or its content.',
          },
        ],
      },
      {
        title: 'Changes to Disclaimer',
        blocks: [
          {
            text: 'KMS reserves the right to update or modify this Disclaimer at any time without prior notice.Continued use of the Site after changes implies acceptance of the updated Disclaimer.',
          },
        ],
      },
      {
        title: 'Contact Details',
        blocks: [
          {
            text: 'For clarifications or concerns relating to this Disclaimer, please contact:',
          },
          { text: 'KMS Strategic Advisors LLP' },
          {
            text: '302, 3rd Floor, Shivalik-10, SBI Zonal Office, Ambawadi, Ahmedabad, Gujarat – 380015',
          },
          { text: 'Email: info@kms-advisors.com' },
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    breadcrumb: 'Home - Cookie Policy',
    lastUpdated: 'May 15, 2026',
    intro: [
      'This Cookie Policy explains how KMS Strategic Advisors LLP (“KMS”, “we”, “our”, “us”) uses cookies and similar tracking technologies on this website (“Site”) to enhance user experience, analyse traffic, and improve performance.',
      'By continuing to browse or use this Site, you consent to our use of cookies in accordance with this Policy.',
    ],
    sections: [
      {
        title: '1. What Are Cookies?',
        blocks: [
          {
            text: 'Cookies are small text files stored on your device when you visit a website.They help the Site remember your preferences, analyse usage and enhance functionality.',
          },
          {
            text: 'Cookies do not contain personally identifiable information unless you choose to provide such information.',
          },
        ],
      },
      {
        title: '2. Types of Cookies We Use',
        blocks: [
          {
            rows: [
              {
                type: 'Strictly Necessary Cookies',
                purpose: 'Enable basic website functionality and secure navigation',
              },
              {
                type: 'Analytics / Performance Cookies',
                purpose: 'Help us understand how users interact with the Site',
              },
              {
                type: 'Preference Cookies (if any)',
                purpose: 'Store user choices such as language or session data',
              },
            ],
          },
          {
            text: 'KMS currently uses Google Analytics for traffic measurement and usage statistics.',
          },
        ],
      },
      {
        title: '3. Google Analytics',
        blocks: [
          { text: 'Google Analytics collects:' },
          {
            items: [
              'User interactions and browsing behavior',
              'Pages visited and duration',
              'Device, location (approx.), browser type',
            ],
          },
          {
            text: 'Data is aggregated and does not identify individuals. Google may store this data on servers located outside India.',
          },
          {
            text: 'To learn more, users may visit Google’s Privacy & Safeguards page.',
          },
        ],
      },
      {
        title: '4. Managing and Disabling Cookies',
        blocks: [
          { text: 'Most web browsers allow users to:' },
          {
            items: [
              'View cookies',
              'Delete cookies',
              'Block cookies entirely',
              'Configure cookie preferences',
            ],
          },
          { text: 'However, disabling cookies may affect:' },
          { items: ['User experience', 'Site functionality'] },
          {
            text: 'Instructions differ by browser, review your browser’s privacy settings to manage cookie behaviour.',
          },
        ],
      },
      {
        title: '5. Consent',
        blocks: [
          {
            text: 'By clicking “Accept”, continuing to use the Site, or submitting information via contact forms, you consent to:',
          },
          {
            items: ['Cookie usage', 'Analytics tracking', 'Processing of anonymized usage data'],
          },
          {
            text: 'You may withdraw consent anytime by deleting cookies or adjusting browser settings.',
          },
        ],
      },
      {
        title: '6. Third-Party Cookies',
        blocks: [
          { text: 'Our Site may use:' },
          {
            items: ['Analytics or embedded content from third-party service providers'],
          },
          {
            text: 'These third parties have their own cookie and privacy policies. KMS does not control or assume responsibility for their practices.',
          },
        ],
      },
      {
        title: '7. Updates to This Policy',
        blocks: [
          { text: 'This Policy may be revised periodically to reflect changes in:' },
          {
            items: ['Technology', 'Legal obligations', 'Analytics practices'],
          },
          {
            text: 'Latest version will always be posted here with the updated date.',
          },
        ],
      },
      {
        title: '8. Contact',
        blocks: [
          { text: 'For questions about cookies or data usage, contact:' },
          { text: 'KMS Strategic Advisors LLP' },
          {
            text: '302, 3rd Floor, Shivalik-10, SBI Zonal Office, Ambawadi, Ahmedabad, Gujarat – 380015',
          },
          { text: 'Email: info@kms-advisors.com' },
        ],
      },
    ],
  },
  'terms-of-use': {
    title: 'Terms of Use & Conditions',
    breadcrumb: 'Home - Terms of Use',
    lastUpdated: 'May 15, 2026',
    intro: [
      'These Website Terms of Use & Conditions (“Terms”) constitute a legally binding agreement between KMS Strategic Advisors LLP, a limited liability partnership incorporated under the Limited Liability Partnership Act, 2008, having its registered office at 302, 3rd Floor, Shivalik-10, SBI Zonal Office, Ambawadi, Ahmedabad, Gujarat - 380015 (“KMS”, “we”, “us”, “our”) and any user (“you”, “your”, “User”) accessing or using this website (“Site”).',
      'By accessing, browsing, or using the Site, you acknowledge and agree that you have read, understood, and shall be bound by these Terms. If you do not agree, do not use this Site.',
    ],
    sections: [
      {
        title: '1. Nature and Scope of Website',
        blocks: [
          { text: 'This Site is intended exclusively for:' },
          {
            items: [
              'Dissemination of general, corporate, and brand-related information about KMS.',
              'Presentation of our professional profile, expertise domains, and credentials.',
            ],
          },
          {
            text: 'This Site does not facilitate onboarding of clients, submission of assignments or rendering of advisory, consultancy, legal, financial or professional services of any nature.',
          },
          {
            text: 'Any engagement with KMS shall occur only through duly executed and authorized service agreements.',
          },
        ],
      },
      {
        title: '2. No Professional Advisory or Client Relationship',
        blocks: [
          { text: 'Information available on this Site:' },
          {
            items: [
              'Is general, non-exhaustive, indicative and for informational purposes only.',
              'Does not constitute professional advice, expert opinion, offer, solicitation, or invitation to contract.',
              'Shall not be relied upon for decision-making.',
            ],
          },
          {
            text: 'Viewing or interacting with the Site does not create any consultant-client, fiduciary, consultant-client or advisory relationship.',
          },
        ],
      },
      {
        title: '3. Intellectual Property Rights',
        blocks: [
          { text: 'Unless otherwise expressly stated:' },
          {
            items: [
              'All trademarks, brand names, service marks, logos, images, graphics, text, layouts, visual elements and other content on this Site are exclusive intellectual property of KMS.',
              'Protected under the Indian Copyright Act, 1957, the Trade Marks Act, 1999 and applicable international treaties.',
            ],
          },
          { text: 'You shall not:' },
          {
            items: [
              'Copy, distribute, modify, reproduce, scrape, index, mirror or commercially exploit any content.',
              'Use automated tools (including AI training, bots, crawlers, scrapers) to extract content or metadata.',
            ],
          },
          {
            text: 'Any unauthorized use is strictly prohibited and may invite legal action including:',
          },
          {
            items: ['Injunctions', 'Damages', 'Criminal prosecution (where applicable)'],
          },
        ],
      },
      {
        title: '4. Prohibited Use',
        blocks: [
          { text: 'Users shall not engage in:' },
          {
            items: [
              'Any unlawful, fraudulent, defamatory or harmful activity',
              'Probing or breaching security mechanisms',
              'Uploading malware or interfering with network operations',
              'Misrepresenting or implying affiliation with KMS',
            ],
          },
          {
            text: 'We reserve the right to take appropriate legal and technical action against violations.',
          },
        ],
      },
      {
        title: '5. Non-Solicitation and Anti-Misrepresentation',
        blocks: [
          { text: 'You agree not to:' },
          {
            items: [
              'Contact third parties claiming association with KMS without written authorization',
              'Use the KMS name, logo, or identity for personal gain, solicitation, or promotion',
              'Create pages, listings, or online profiles implying partnership with KMS',
            ],
          },
          {
            text: 'KMS reserves the right to pursue legal remedies for any unauthorized representation or reputational harm.',
          },
        ],
      },
      {
        title: '6. Monitoring & Consent',
        blocks: [
          { text: 'By using the Site, you agree that KMS may:' },
          {
            items: [
              'Monitor traffic patterns and Site usage',
              'Log and retain access information for analytics and compliance',
              'Employ cookies or third-party tracking technologies (Details available in our Privacy Policy)',
            ],
          },
        ],
      },
      {
        title: '7. Third-Party Links',
        blocks: [
          { text: 'Links to external websites (if any):' },
          {
            items: [
              'Are provided solely for convenience',
              'Are neither controlled nor endorsed by KMS',
              'Are accessed at your own risk',
            ],
          },
          {
            text: 'KMS bears no responsibility for linked content or associated consequences.',
          },
        ],
      },
      {
        title: '8. Accuracy of Information',
        blocks: [
          {
            text: 'All content is provided on an “as-is” and “as-available” basis without warranties of any kind.',
          },
          { text: 'KMS does not guarantee:' },
          {
            items: [
              'Accuracy',
              'Completeness',
              'Timeliness',
              'Reliability',
              'Fitness for a particular purpose',
            ],
          },
          {
            text: 'Information is subject to modification without prior notice.',
          },
        ],
      },
      {
        title: '9. Limitation of Liability',
        blocks: [
          {
            text: 'To the fullest extent permitted by law, KMS and its partners, officers, employees and associates shall not be liable for any:',
          },
          {
            items: [
              'Direct, indirect, special, incidental, consequential, punitive, commercial, economic or reputational loss',
              'Arising out of or connected with use or inability to use this Site',
              'Including but not limited to viruses, data loss, business interruption or operational damages',
            ],
          },
          { text: 'Use of this Site is entirely at your own risk.' },
        ],
      },
      {
        title: '10. Indemnity',
        blocks: [
          {
            text: 'You agree to indemnify, defend and hold harmless KMS from and against:',
          },
          {
            items: [
              'Any claims, liabilities, damages, legal expenses, or losses',
              'Resulting from your breach of these Terms or misuse of the Site',
            ],
          },
          {
            text: 'This obligation shall survive termination of your access to the Site.',
          },
        ],
      },
      {
        title: '11. Data Privacy & Security',
        blocks: [
          { text: 'Processing of personal data is governed under:' },
          {
            items: [
              'Digital Personal Data Protection Act, 2023',
              'Information Technology Act, 2000 & SPDI Rules',
            ],
          },
          {
            text: 'Your use of the Site is subject to our detailed Privacy Policy, incorporated by reference herein.',
          },
        ],
      },
      {
        title: '12. Governing Law & Jurisdiction',
        blocks: [
          {
            text: 'These Terms shall be governed by applicable laws of India.',
          },
          {
            text: 'Courts in Ahmedabad, Gujarat shall have exclusive jurisdiction over any disputes arising from these Terms or Site usage to the exclusion of all other courts.',
          },
        ],
      },
      {
        title: '13. Modification of Terms',
        blocks: [
          { text: 'KMS reserves the absolute right to:' },
          {
            items: [
              'Revise, amend, update, or replace these Terms',
              'Without prior notification',
            ],
          },
          {
            text: 'Continued use following such changes constitutes binding acceptance.',
          },
        ],
      },
      {
        title: '14. Contact Details',
        blocks: [
          { text: 'For notices, queries, or grievances, contact:' },
          { text: 'KMS Strategic Advisors LLP' },
          {
            text: '302, 3rd Floor, Shivalik-10, SBI Zonal Office, Ambawadi, Ahmedabad, Gujarat – 380015',
          },
          { text: 'Email: info@kms-advisors.com' },
          { text: 'Website: www.kms-advisors.com' },
        ],
      },
    ],
  },
};
