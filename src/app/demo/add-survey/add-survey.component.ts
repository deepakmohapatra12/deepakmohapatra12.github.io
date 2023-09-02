import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SurveyCreatorModel } from 'survey-creator-core';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { Model } from 'survey-core';
const creatorOptions = {
  showLogicTab: false,
  showJSONEditorTab: true
};

const defaultJson = {
  pages: [
    {
      name: 'Name',
      elements: [
        {
          name: 'FirstName',
          title: 'Enter your first name:',
          type: 'text'
        },
        {
          name: 'LastName',
          title: 'Enter your last name:',
          type: 'text'
        }
      ]
    }
  ]
};
@Component({
  selector: 'app-add-survey',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, SharedModule, SurveyCreatorModule],
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.scss']
})
export default class SamplePageComponent implements OnInit {
  surveyCreatorModel: SurveyCreatorModel;
  model: Model;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
      callback(saveNo, true);
      this.saveSurveyJson('https://your-web-service.com/', creator.JSON, saveNo, callback);
    };
    this.surveyCreatorModel = creator;
  }

  saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
    console.log(json);
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.addEventListener('load', () => {
      callback(saveNo, true);
    });
    request.addEventListener('error', () => {
      callback(saveNo, false);
    });
    request.send(JSON.stringify(json));
  }
}
