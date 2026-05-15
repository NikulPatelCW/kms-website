import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedImports } from '../../shared/shared-imports';
import {
  LEGAL_CONTENT,
  LegalContentKey,
  LegalDocument,
} from './legal-content';

@Component({
  selector: 'app-legal-page',
  imports: [SharedImports],
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPage implements OnInit, AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  headerBgPath = 'assets/images/about-us-hero-bg.jpg';
  headerImgStyle: Record<string, string> = {
    'background-image': `url(${this.headerBgPath})`,
  };

  document: LegalDocument | null = null;

  ngOnInit(): void {
    this.headerImgStyle = { 'background-image': `url(${this.headerBgPath})` };
    const key = this.route.snapshot.data['legalKey'] as LegalContentKey;
    this.document = LEGAL_CONTENT[key] ?? null;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    import('aos').then(({ default: AOS }) => {
      AOS.refresh();
    });
  }
}
