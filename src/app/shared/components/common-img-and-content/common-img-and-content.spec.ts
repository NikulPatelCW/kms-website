import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonImgAndContent } from './common-img-and-content';

describe('CommonImgAndContent', () => {
  let component: CommonImgAndContent;
  let fixture: ComponentFixture<CommonImgAndContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonImgAndContent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonImgAndContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
