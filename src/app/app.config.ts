import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CustomIcon } from './core/custom-icon';
import { ImagePreloadService } from './core/image-preload.service';

function initializeIcons(iconService: CustomIcon) {
  return () => {
    iconService.registerSvgIcon('telephone', 'assets/icons/telephone.svg');
    iconService.registerSvgIcon('arrow-down', 'assets/icons/arrow-down.svg');
    iconService.registerSvgIcon('arrow-up', 'assets/icons/arrow-up.svg');
  };
}

function preloadCriticalImages(preloadService: ImagePreloadService) {
  return () => {
    // Preload critical above-the-fold images
    const criticalImages = [
      'assets/images/logo.svg', // Header logo
      'assets/images/hero-bg-img.jpg', // Hero section poster
      'assets/images/footer-logo.svg' // Footer logo (visible on most pages)
    ];
    
    preloadService.preloadImages(criticalImages);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [CustomIcon],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: preloadCriticalImages,
      deps: [ImagePreloadService],
      multi: true
    }
  ]
};
