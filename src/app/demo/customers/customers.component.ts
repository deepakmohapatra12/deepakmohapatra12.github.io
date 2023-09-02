import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SurveyCreatorModule } from 'survey-creator-angular';

@Component({
  selector: 'app-customers',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, SharedModule, SurveyCreatorModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export default class CustomersComponent implements OnInit {
  customers: { id: number;surveyName: string; name: string; email: string; mobile: number;ResponseSubmitted: string; location: string; }[];
  constructor() {

  }

  ngOnInit(): void {
    this.customers = [
      {
        id: 1,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore',

      },
      {
        id: 2,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 3,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 4,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 5,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 6,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 7,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 8,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 9,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 10,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 11,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 12,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      },
      {
        id: 13,
        surveyName: 'Micorbrand Wacthes',
        name: 'Russia',
        email: 'deepakmohapatra12@gmail.com',
        mobile: 17075200,
        ResponseSubmitted: 'Yes',
        location: 'Bangalore'
      }
    ];
  }
}
