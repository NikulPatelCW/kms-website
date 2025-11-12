import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonImgAndContent } from './common-img-and-content';

describe('CommonImgAndContent', () => {
  let component: CommonImgAndContent;
  let fixture: ComponentFixture<CommonImgAndContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonImgAndContent]
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
