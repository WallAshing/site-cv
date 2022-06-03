import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsOfInterestsComponent } from './points-of-interests.component';

describe('PointsOfInterestsComponent', () => {
  let component: PointsOfInterestsComponent;
  let fixture: ComponentFixture<PointsOfInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsOfInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsOfInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
