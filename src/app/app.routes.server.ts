import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: 'home',
    renderMode: RenderMode.Server
  },
  {
    path: 'about',
    renderMode: RenderMode.Server
  },
  {
    path: 'the-team',
    renderMode: RenderMode.Server
  },
  {
    path: 'kms-approach',
    renderMode: RenderMode.Server
  },
  {
    path: 'kms-expertise/**',
    renderMode: RenderMode.Server
  },
  {
    path: 'industries',
    renderMode: RenderMode.Server
  },
  {
    path: 'contact-us',
    renderMode: RenderMode.Server
  },
  {
    path: 'career',
    renderMode: RenderMode.Server
  },
  {
    path: 'privacy-policy',
    renderMode: RenderMode.Server
  },
  {
    path: 'disclaimer',
    renderMode: RenderMode.Server
  },
  {
    path: 'cookie-policy',
    renderMode: RenderMode.Server
  },
  {
    path: 'terms-of-use',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
