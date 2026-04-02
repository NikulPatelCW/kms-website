import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CustomIcon {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {}

  registerSvgIcon(iconName: string, iconPath: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
    );
  }

  registerMultipleSvgIcons(icons: { name: string; path: string }[]): void {
    icons.forEach(icon => {
      this.registerSvgIcon(icon.name, icon.path);
    });
  }
}
