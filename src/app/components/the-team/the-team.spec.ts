import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheTeam } from './the-team';

describe('TheTeam', () => {
  let component: TheTeam;
  let fixture: ComponentFixture<TheTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheTeam],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TheTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set hero background style', () => {
    expect(component.headerImgStyle['background-image']).toContain('about-us-hero-bg.jpg');
  });

  it('should list team members', () => {
    expect(component.teamMembers.length).toBe(4);
  });
});
