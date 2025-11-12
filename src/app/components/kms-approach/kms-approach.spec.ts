import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmsApproach } from './kms-approach';

describe('KmsApproach', () => {
  let component: KmsApproach;
  let fixture: ComponentFixture<KmsApproach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmsApproach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmsApproach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
