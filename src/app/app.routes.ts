import { Routes } from '@angular/router';
import { Header } from './components/header/header';

export const routes: Routes = [
  {
    path: '',
    component: Header,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../app/components/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('../app/components/about-us/about-us').then((m) => m.AboutUs),
      },
      {
        path: 'kms-approach',
        loadComponent: () =>
          import('../app/components/kms-approach/kms-approach').then((m) => m.KmsApproach),
      },
      {
        path: 'kms-expertise/business-advisory',
        loadComponent: () =>
          import('../app/components/kms-expertise/business-advisory/business-advisory').then(
            (m) => m.BusinessAdvisory
          ),
      },
      {
        path:'kms-expertise/family-wealth',
        loadComponent:() => import('../app/components/kms-expertise/family-wealth/family-wealth').then((m) => m.FamilyWealth)
      },
      {
        path:'kms-expertise/value-maximization',
        loadComponent:() => import('../app/components/kms-expertise/value-maximization-and-monetization/value-maximization-and-monetization').then((m) => m.ValueMaximizationAndMonetization)
      },
      {
        path:'kms-expertise/business-succession',
        loadComponent:() => import('../app/components/kms-expertise/business-succession/business-succession').then((m) => m.BusinessSuccession)
      },
      {
        path:'kms-expertise/structuring',
        loadComponent:() => import('../app/components/kms-expertise/structuring-and-restructuring/structuring-and-restructuring').then((m) => m.StructuringAndRestructuring)
      },
      {
        path:'kms-expertise/financial-insights',
        loadComponent:() => import('../app/components/kms-expertise/financial-insights/financial-insights').then((m) => m.FinancialInsights)
      },
      {
        path:'kms-expertise/inorganic-growth',
        loadComponent:() => import('../app/components/kms-expertise/inorganic-growth-strategies/inorganic-growth-strategies').then((m) => m.InorganicGrowthStrategies)
      },
      {
        path:'kms-expertise/tech-businesses',
        loadComponent:() => import('../app/components/kms-expertise/tech-and-disruptive-businesses/tech-and-disruptive-businesses').then((m) => m.TechAndDisruptiveBusinesses)
      },
      {
        path:'kms-expertise/multinational',
        loadComponent:() => import('../app/components/kms-expertise/multinational-overseas-structuring/multinational-overseas-structuring').then((m) => m.MultinationalOverseasStructuring)
      },
      {
        path:'kms-expertise/tax-efficiencies',
        loadComponent:() => import('../app/components/kms-expertise/tax-efficiencies/tax-efficiencies').then((m) => m.TaxEfficiencies)
      },
      {
        path:'kms-expertise/legal-commercial',
        loadComponent:() => import('../app/components/kms-expertise/legal-commercial/legal-commercial').then((m) => m.LegalCommercial)
      },
      {
        path: 'industries',
        loadComponent: () =>
          import('../app/components/industries/industries').then((m) => m.Industries),
      },
       {
        path: 'contact-us',
        loadComponent: () =>
          import('../app/components/contact-us/contact-us').then((m) => m.ContactUs),
      },
      {
        path: '**',
       redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
