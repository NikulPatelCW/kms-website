import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  setTheme(theme: 'light' | 'dark' | 'corporate'): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme(): string {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
  
}
