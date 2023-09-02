
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Model } from 'survey-core';
import { SurveyModule } from "survey-angular-ui";

@Component({
  selector: 'app-my-survey-details',
  standalone: true,
  imports: [CommonModule, SurveyModule],
  templateUrl: './my-survey-details.component.html',
  styleUrls: ['./my-survey-details.component.scss']
})
export default class MySurveyDetailsComponent implements OnInit {
  surveyModel: Model;
  constructor() {}
  ngOnInit(): void {
    const surveyJson = {
      "logoPosition": "right",
      "pages": [
          {
              "name": "page1",
              "elements": [
                  {
                      "type": "rating",
                      "name": "question1"
                  },
                  {
                      "type": "dropdown",
                      "name": "question2",
                      "choices": [
                          "Item 1",
                          "Item 2",
                          "Item 3"
                      ]
                  },
                  {
                      "type": "checkbox",
                      "name": "question3",
                      "choices": [
                          "Item 1",
                          "Item 2",
                          "Item 3"
                      ]
                  },
                  {
                      "type": "text",
                      "name": "question4"
                  }
              ]
          }
      ]
  };
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
  });
  }
}
