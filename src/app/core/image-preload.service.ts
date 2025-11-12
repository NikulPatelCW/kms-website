import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Service for preloading images to improve page load performance.
 * 
 * Usage:
 * 1. Automatic preloading: Add 'preload-image' class or 'data-preload' attribute to img elements
 * 2. Programmatic preloading: Inject this service and call preloadImage() or preloadImages()
 * 
 * Example:
 * - <img src="hero.jpg" class="preload-image" />
 * - <img src="hero.jpg" data-preload />
 * - preloadService.preloadImage('assets/images/critical.jpg');
 */
@Injectable({
  providedIn: 'root'
})
export class ImagePreloadService {
  private preloadedImages = new Set<string>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * Preload a single image using link rel="preload"
   * @param imageUrl - URL of the image to preload
   * @param as - Resource type (default: 'image')
   */
  preloadImage(imageUrl: string, as: string = 'image'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Skip if already preloaded
    if (this.preloadedImages.has(imageUrl)) {
      return;
    }

    // Create link element for preloading
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = imageUrl;
    link.crossOrigin = 'anonymous';

    // Add to head
    document.head.appendChild(link);
    this.preloadedImages.add(imageUrl);

    // Clean up after image is loaded (optional)
    const img = new Image();
    img.onload = () => {
      // Image is now in browser cache
    };
    img.src = imageUrl;
  }

  /**
   * Preload multiple images
   * @param imageUrls - Array of image URLs to preload
   */
  preloadImages(imageUrls: string[]): void {
    imageUrls.forEach(url => this.preloadImage(url));
  }

  /**
   * Check if an image has been preloaded
   * @param imageUrl - URL of the image to check
   */
  isPreloaded(imageUrl: string): boolean {
    return this.preloadedImages.has(imageUrl);
  }
}
