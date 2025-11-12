import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuringAndRestructuring } from './structuring-and-restructuring';

describe('StructuringAndRestructuring', () => {
  let component: StructuringAndRestructuring;
  let fixture: ComponentFixture<StructuringAndRestructuring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuringAndRestructuring],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuringAndRestructuring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
