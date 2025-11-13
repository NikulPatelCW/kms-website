import { Directive, ElementRef, OnInit, Renderer2, PLATFORM_ID, Inject, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ImagePreloadService } from './image-preload.service';
 
@Directive({
  selector: '[appLazyLoadImages]',
  standalone: true
})
export class LazyLoadImageDirective implements OnInit, AfterViewInit, OnDestroy {
  private observer?: MutationObserver;
 
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private preloadService: ImagePreloadService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
 
  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
 
    // Process existing images
    this.processImages(this.el.nativeElement);
  }
 
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
 
    // Watch for new images added dynamically
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            if (element.tagName === 'IMG') {
              this.processImage(element as HTMLImageElement);
            }
            // Also check for images within the added node
            const images = element.querySelectorAll?.('img');
            images?.forEach((img) => this.processImage(img));
          }
        });
      });
    });
 
    this.observer.observe(this.el.nativeElement, {
      childList: true,
      subtree: true
    });
  }
 
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
 
  private processImages(container: HTMLElement): void {
    const images = container.querySelectorAll('img');
    images.forEach((img) => this.processImage(img));
  }
 
private processImage(img: HTMLImageElement): void {
    // Handle preload class - preload the image
    if (img.classList.contains('preload-image') || img.hasAttribute('data-preload')) {
      // Get image source - check multiple possible attributes
      const imageSrc = img.getAttribute('src') || 
                       img.getAttribute('data-src') || 
                       img.src || 
                       img.currentSrc;
      if (imageSrc && imageSrc !== '') {
        this.preloadService.preloadImage(imageSrc);
      }
      // Set loading="eager" for preloaded images
      this.renderer.setAttribute(img, 'loading', 'eager');
      return;
    }
    // Skip if already has loading attribute or has no-lazy-load class
    if (
      img.hasAttribute('loading') || 
      img.classList.contains('no-lazy-load')
    ) {
      return;
    }
    // Add loading="lazy" attribute for all other images
    this.renderer.setAttribute(img, 'loading', 'lazy');
  }
  private addLazyLoading(img: HTMLImageElement): void {
    this.processImage(img);
  }
}