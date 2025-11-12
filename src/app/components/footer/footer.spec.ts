import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call commonUtils.scrollToTop on handleRouterChange', () => {
    spyOn(component['commonUtils'], 'scrollToTop');
    component.handleRouterChange();
    expect(component['commonUtils'].scrollToTop).toHaveBeenCalled();
  });

  it('should inject CommonUtils service', () => {
    expect(component['commonUtils']).toBeDefined();
  });
});
