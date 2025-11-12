import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMaximizationAndMonetization } from './value-maximization-and-monetization';

describe('ValueMaximizationAndMonetization', () => {
  let component: ValueMaximizationAndMonetization;
  let fixture: ComponentFixture<ValueMaximizationAndMonetization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueMaximizationAndMonetization],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueMaximizationAndMonetization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
