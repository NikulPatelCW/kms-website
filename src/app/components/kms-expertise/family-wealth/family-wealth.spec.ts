import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyWealth } from './family-wealth';

describe('FamilyWealth', () => {
  let component: FamilyWealth;
  let fixture: ComponentFixture<FamilyWealth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyWealth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyWealth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
