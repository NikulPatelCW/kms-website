import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CustomIcon } from './core/custom-icon';

function initializeIcons(iconService: CustomIcon) {
  return () => {
    iconService.registerSvgIcon('telephone', 'assets/icons/telephone.svg');
    iconService.registerSvgIcon('arrow-down', 'assets/icons/arrow-down.svg');
    iconService.registerSvgIcon('arrow-up', 'assets/icons/arrow-up.svg');
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
    }
  ]
};
