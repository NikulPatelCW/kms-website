import { Component, signal, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedImports } from './shared/shared-imports';
import { isPlatformBrowser } from '@angular/common';
import { LazyLoadImageDirective } from './core/lazy-load-image.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedImports, LazyLoadImageDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kms-advisors');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(({ default: AOS }) => {
        AOS.init();
      });
    }
  }
}
