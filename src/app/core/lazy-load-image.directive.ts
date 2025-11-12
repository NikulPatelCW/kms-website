import { Directive, ElementRef, OnInit, Renderer2, PLATFORM_ID, Inject, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appLazyLoadImages]',
  standalone: true
})
export class LazyLoadImageDirective implements OnInit, AfterViewInit, OnDestroy {
  private observer?: MutationObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
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
              this.addLazyLoading(element as HTMLImageElement);
            }
            // Also check for images within the added node
            const images = element.querySelectorAll?.('img');
            images?.forEach((img) => this.addLazyLoading(img));
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
    images.forEach((img) => this.addLazyLoading(img));
  }

  private addLazyLoading(img: HTMLImageElement): void {
    // Skip if already has loading attribute or has no-lazy-load class
    if (
      img.hasAttribute('loading') || 
      img.classList.contains('no-lazy-load')
    ) {
      return;
    }
    
    // Add loading="lazy" attribute
    this.renderer.setAttribute(img, 'loading', 'lazy');
  }
}

