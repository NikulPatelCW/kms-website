import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CustomIcon } from './custom-icon';

describe('CustomIcon', () => {
  let service: CustomIcon;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(CustomIcon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
