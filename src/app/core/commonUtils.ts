import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtils {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isMobile(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    return window.innerWidth < 768;
  }
}
