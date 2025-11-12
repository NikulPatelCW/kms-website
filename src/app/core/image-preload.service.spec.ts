import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ImagePreloadService } from './image-preload.service';

describe('ImagePreloadService', () => {
  let service: ImagePreloadService;
  let platformId: Object;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ImagePreloadService,
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
    service = TestBed.inject(ImagePreloadService);
    platformId = TestBed.inject(PLATFORM_ID);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should preload a single image', () => {
    const imageUrl = 'assets/images/test.jpg';
    spyOn(document, 'createElement').and.callThrough();
    
    service.preloadImage(imageUrl);
    
    const links = document.querySelectorAll('link[rel="preload"]');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should not preload the same image twice', () => {
    const imageUrl = 'assets/images/test.jpg';
    
    service.preloadImage(imageUrl);
    service.preloadImage(imageUrl);
    
    const links = document.querySelectorAll(`link[href="${imageUrl}"]`);
    expect(links.length).toBe(1);
  });

  it('should preload multiple images', () => {
    const imageUrls = [
      'assets/images/test1.jpg',
      'assets/images/test2.jpg',
      'assets/images/test3.jpg'
    ];
    
    service.preloadImages(imageUrls);
    
    imageUrls.forEach(url => {
      expect(service.isPreloaded(url)).toBe(true);
    });
  });

  it('should check if image is preloaded', () => {
    const imageUrl = 'assets/images/test.jpg';
    
    expect(service.isPreloaded(imageUrl)).toBe(false);
    
    service.preloadImage(imageUrl);
    
    expect(service.isPreloaded(imageUrl)).toBe(true);
  });
});
