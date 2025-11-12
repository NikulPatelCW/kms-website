import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmsApproach } from './kms-approach';

describe('KmsApproach', () => {
  let component: KmsApproach;
  let fixture: ComponentFixture<KmsApproach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmsApproach],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmsApproach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header background image', () => {
    expect(component.headerBgPath).toBe('/assets/images/about-us-hero-bg.png');
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(/assets/images/about-us-hero-bg.png)' });
  });

  it('should update header style on ngOnInit', () => {
    component.headerBgPath = '/new/path/image.png';
    component.ngOnInit();
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(/new/path/image.png)' });
  });
});
