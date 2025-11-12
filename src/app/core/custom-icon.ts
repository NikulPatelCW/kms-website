import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CustomIcon {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  registerSvgIcon(iconName: string, iconPath: string): void {
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
