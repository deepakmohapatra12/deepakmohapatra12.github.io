import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySurveyDetailsComponent } from './my-survey-details.component';

describe('MySurveyDetailsComponent', () => {
  let component: MySurveyDetailsComponent;
  let fixture: ComponentFixture<MySurveyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySurveyDetailsComponent]
    });
    fixture = TestBed.createComponent(MySurveyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
