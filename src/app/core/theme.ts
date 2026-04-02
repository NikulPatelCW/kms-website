import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  setTheme(theme: 'light' | 'dark' | 'corporate'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme(): string {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    return document.documentElement.getAttribute('data-theme') || 'light';
  }
  
}
