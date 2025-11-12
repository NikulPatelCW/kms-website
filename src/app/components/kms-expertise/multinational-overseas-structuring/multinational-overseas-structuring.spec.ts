import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultinationalOverseasStructuring } from './multinational-overseas-structuring';

describe('MultinationalOverseasStructuring', () => {
  let component: MultinationalOverseasStructuring;
  let fixture: ComponentFixture<MultinationalOverseasStructuring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultinationalOverseasStructuring],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultinationalOverseasStructuring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
