import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'home',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'the-team',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'kms-approach',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'kms-expertise/**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'industries',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact-us',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'career',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'privacy-policy',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'disclaimer',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'cookie-policy',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'terms-of-use',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
