import { provideZonelessChangeDetection, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideZonelessChangeDetection(),
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize carousel options', () => {
    expect(component.carouselOptions.items).toBe(1);
    expect(component.carouselOptions.loop).toBe(true);
    expect(component.carouselOptions.autoplay).toBe(true);
  });

  it('should have 3 slides', () => {
    expect(component.slides.length).toBe(3);
  });

  it('should have 4 process data items', () => {
    expect(component.processData.length).toBe(4);
  });

  it('should have 6 know KMS data items', () => {
    expect(component.knowKMSData.length).toBe(6);
  });

  it('should initialize arrow states', () => {
    expect(component.showLeftArrow).toBe(false);
    expect(component.showRightArrow).toBe(true);
  });

  it('should initialize showMore signal', () => {
    expect(component.showMore()).toBe(false);
  });

  it('should have correct process titles', () => {
    const expectedTitles = ['Discovery', 'Advisory & Solution', 'Implementation', 'Review & Monitoring '];
    component.processData.forEach((data, index) => {
      expect(data.title).toBe(expectedTitles[index]);
    });
  });

  it('should scroll left when scroll method called with left', () => {
    const mockElement = {
      clientWidth: 1000,
      scrollBy: jasmine.createSpy('scrollBy')
    };
    component.scrollContainer = { nativeElement: mockElement } as any;
    
    component.scroll('left');
    expect(mockElement.scrollBy).toHaveBeenCalledWith({
      left: -800,
      behavior: 'smooth'
    });
  });

  it('should scroll right when scroll method called with right', () => {
    const mockElement = {
      clientWidth: 1000,
      scrollBy: jasmine.createSpy('scrollBy')
    };
    component.scrollContainer = { nativeElement: mockElement } as any;
    
    component.scroll('right');
    expect(mockElement.scrollBy).toHaveBeenCalledWith({
      left: 800,
      behavior: 'smooth'
    });
  });

  it('should update arrows based on scroll position', () => {
    const mockElement = {
      scrollLeft: 100,
      clientWidth: 1000,
      scrollWidth: 2000
    };
    component.scrollContainer = { nativeElement: mockElement } as any;
    
    component.updateArrows();
    expect(component.showLeftArrow).toBe(true);
    expect(component.showRightArrow).toBe(true);
  });

  it('should call updateArrows on scroll', () => {
    spyOn(component, 'updateArrows');
    component.onScroll();
    expect(component.updateArrows).toHaveBeenCalled();
  });
});
