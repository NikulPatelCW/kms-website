import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxEfficiencies } from './tax-efficiencies';

describe('TaxEfficiencies', () => {
  let component: TaxEfficiencies;
  let fixture: ComponentFixture<TaxEfficiencies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxEfficiencies],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxEfficiencies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
