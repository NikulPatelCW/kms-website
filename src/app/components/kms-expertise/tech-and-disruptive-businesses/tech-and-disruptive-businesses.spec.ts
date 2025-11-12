import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAndDisruptiveBusinesses } from './tech-and-disruptive-businesses';

describe('TechAndDisruptiveBusinesses', () => {
  let component: TechAndDisruptiveBusinesses;
  let fixture: ComponentFixture<TechAndDisruptiveBusinesses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechAndDisruptiveBusinesses],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechAndDisruptiveBusinesses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
