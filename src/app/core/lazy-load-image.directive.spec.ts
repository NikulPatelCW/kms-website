import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, PLATFORM_ID } from '@angular/core';
import { LazyLoadImageDirective } from './lazy-load-image.directive';

@Component({
  template: `
    <div appLazyLoadImages>
      <img src="test1.jpg" />
      <img src="test2.jpg" class="no-lazy-load" />
      <img src="test3.jpg" loading="eager" />
    </div>
  `,
  standalone: true,
  imports: [LazyLoadImageDirective]
})
class TestComponent {}

describe('LazyLoadImageDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add loading="lazy" to images without loading attribute', () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    const firstImg = images[0];
    expect(firstImg.getAttribute('loading')).toBe('lazy');
  });

  it('should not add loading="lazy" to images with no-lazy-load class', () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    const secondImg = images[1];
    expect(secondImg.getAttribute('loading')).toBeNull();
  });

  it('should not override existing loading attribute', () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    const thirdImg = images[2];
    expect(thirdImg.getAttribute('loading')).toBe('eager');
  });
});

