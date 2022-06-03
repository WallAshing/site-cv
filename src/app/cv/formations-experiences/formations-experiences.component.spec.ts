import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsExperiencesComponent } from './formations-experiences.component';

describe('FormationsExperiencesComponent', () => {
  let component: FormationsExperiencesComponent;
  let fixture: ComponentFixture<FormationsExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationsExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
