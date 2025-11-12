import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSuccession } from './business-succession';

describe('BusinessSuccession', () => {
  let component: BusinessSuccession;
  let fixture: ComponentFixture<BusinessSuccession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSuccession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSuccession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
