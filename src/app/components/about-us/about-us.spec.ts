import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutUs } from './about-us';

describe('AboutUs', () => {
  let component: AboutUs;
  let fixture: ComponentFixture<AboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUs],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header background image style', () => {
    expect(component.headerBgPath).toBe('assets/images/about-us-hero-bg.jpg');
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(assets/images/about-us-hero-bg.jpg)' });
  });

  it('should have 4 KMS features', () => {
    expect(component.kmsFeature).toBeDefined();
    expect(component.kmsFeature.length).toBe(4);
  });

  it('should have correct KMS feature titles', () => {
    const expectedTitles = ['Client centered', 'Power of integration', 'Responsibility built-in', 'Collaborate to innovate'];
    component.kmsFeature.forEach((feature, index) => {
      expect(feature.title).toBe(expectedTitles[index]);
    });
  });

  it('should have 9 process data entries for timeline', () => {
    expect(component.processData).toBeDefined();
    expect(component.processData.length).toBe(9);
  });

  it('should have correct timeline periods', () => {
    const expectedPeriods = ['1981-85', '1985-90', '1990-95', '1995-2000', '2000-2005', '2005-2010', '2010-2015', '2015-2020', '2020-2022'];
    component.processData.forEach((data, index) => {
      expect(data.title).toBe(expectedPeriods[index]);
    });
  });

  it('should render hero section with correct title', () => {
    const heroTitle = fixture.debugElement.query(By.css('.common-hero-section-title h3'));
    expect(heroTitle.nativeElement.textContent.trim()).toBe('About KMS');
  });

  it('should render breadcrumb navigation', () => {
    const breadcrumb = fixture.debugElement.query(By.css('.common-hero-section-title p'));
    expect(breadcrumb.nativeElement.textContent.trim()).toBe('Home - About Us');
  });

  it('should render KMS Evolution section', () => {
    const evolutionTitle = fixture.debugElement.query(By.css('.about-kms-evolution-section h4'));
    expect(evolutionTitle.nativeElement.textContent.trim()).toBe('KMS Evolution');
  });

  it('should render timeline section with correct title', () => {
    const timelineTitle = fixture.debugElement.query(By.css('.evolution-section-title'));
    expect(timelineTitle.nativeElement.textContent.trim()).toBe('Evolution In 40 Years');
  });

  it('should render team section title', () => {
    const teamTitle = fixture.debugElement.query(By.css('.about-kms-team-content h4'));
    expect(teamTitle.nativeElement.textContent.trim()).toBe('The Team Behind KMS');
  });

  it('should render vision section', () => {
    const visionTitle = fixture.debugElement.query(By.css('.about-kms-vision h4'));
    expect(visionTitle.nativeElement.textContent.trim()).toBe('KMS Vision');
  });

  it('should render mission section', () => {
    const missionTitle = fixture.debugElement.query(By.css('.about-kms-mission h4'));
    expect(missionTitle.nativeElement.textContent.trim()).toBe('KMS Mission');
  });

  it('should render all KMS feature cards', () => {
    const featureCards = fixture.debugElement.queryAll(By.css('.about-kms-feature-card'));
    expect(featureCards.length).toBe(4);
  });

  it('should render feature card images', () => {
    const featureImages = fixture.debugElement.queryAll(By.css('.about-kms-feature-card img'));
    expect(featureImages.length).toBe(4);
    
    const expectedImages = [
      'assets/images/about/customer.svg',
      'assets/images/about/time-management.svg',
      'assets/images/about/contract.svg',
      'assets/images/about/thumb-up.svg'
    ];
    
    featureImages.forEach((img, index) => {
      expect(img.nativeElement.src).toContain(expectedImages[index]);
    });
  });

  it('should update header style on ngOnInit', () => {
    component.headerBgPath = '/new/path/image.jpg';
    component.ngOnInit();
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(/new/path/image.jpg)' });
  });

  it('should have proper data structure for process data', () => {
    component.processData.forEach(data => {
      expect(data.title).toBeDefined();
      expect(data.details).toBeDefined();
      expect(Array.isArray(data.details)).toBeTruthy();
      expect(data.details.length).toBeGreaterThan(0);
    });
  });

  it('should have proper data structure for KMS features', () => {
    component.kmsFeature.forEach(feature => {
      expect(feature.imgUrl).toBeDefined();
      expect(feature.title).toBeDefined();
      expect(feature.description).toBeDefined();
      expect(feature.imgUrl).toContain('assets/images/about/');
      expect(feature.title.length).toBeGreaterThan(0);
      expect(feature.description.length).toBeGreaterThan(0);
    });
  });
});
