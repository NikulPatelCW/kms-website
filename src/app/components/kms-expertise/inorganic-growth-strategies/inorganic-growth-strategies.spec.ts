import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InorganicGrowthStrategies } from './inorganic-growth-strategies';

describe('InorganicGrowthStrategies', () => {
  let component: InorganicGrowthStrategies;
  let fixture: ComponentFixture<InorganicGrowthStrategies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InorganicGrowthStrategies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InorganicGrowthStrategies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
