import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInsights } from './financial-insights';

describe('FinancialInsights', () => {
  let component: FinancialInsights;
  let fixture: ComponentFixture<FinancialInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialInsights],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialInsights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
