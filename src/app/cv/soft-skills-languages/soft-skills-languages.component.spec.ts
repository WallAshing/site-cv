import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsLanguagesComponent } from './soft-skills-languages.component';

describe('SoftSkillsLanguagesComponent', () => {
  let component: SoftSkillsLanguagesComponent;
  let fixture: ComponentFixture<SoftSkillsLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillsLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftSkillsLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
