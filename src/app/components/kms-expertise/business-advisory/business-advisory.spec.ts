import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdvisory } from './business-advisory';

describe('BusinessAdvisory', () => {
  let component: BusinessAdvisory;
  let fixture: ComponentFixture<BusinessAdvisory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAdvisory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAdvisory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
