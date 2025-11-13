import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Industries } from './industries';

describe('Industries', () => {
  let component: Industries;
  let fixture: ComponentFixture<Industries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Industries],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Industries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize header background image', () => {
    expect(component.headerBgPath).toBe('assets/images/header-bg/sector.jpg');
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(assets/images/header-bg/sector.jpg)' });
  });

  it('should have 2 industry data groups', () => {
    expect(component.knowKMSData.length).toBe(2);
  });

  it('should have correct number of industries in first group', () => {
    expect(component.knowKMSData[0].details.length).toBe(13);
  });

  it('should have correct number of industries in second group', () => {
    expect(component.knowKMSData[1].details.length).toBe(13);
  });

  it('should contain expected industries in first group', () => {
    const firstGroup = component.knowKMSData[0].details;
    expect(firstGroup).toContain('Advertising, Media & Entertainment');
    expect(firstGroup).toContain('Banking & NBFCs');
    expect(firstGroup).toContain('Education & Training');
  });

  it('should contain expected industries in second group', () => {
    const secondGroup = component.knowKMSData[1].details;
    expect(secondGroup).toContain('Energy & Resources');
    expect(secondGroup).toContain('Technology & Telecommunications');
    expect(secondGroup).toContain('Tourism & Hospitality');
  });

  it('should update header style on ngOnInit', () => {
    component.headerBgPath = '/new/path/image.jpg';
    component.ngOnInit();
    expect(component.headerImgStyle).toEqual({ 'background-image': 'url(/new/path/image.jpg)' });
  });

  it('should have proper data structure for knowKMSData', () => {
    component.knowKMSData.forEach(data => {
      expect(data.details).toBeDefined();
      expect(Array.isArray(data.details)).toBeTruthy();
      expect(data.details.length).toBeGreaterThan(0);
    });
  });
});
