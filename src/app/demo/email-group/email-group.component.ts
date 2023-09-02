import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyModule } from 'survey-angular-ui';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';



const USER_DATA = [
  {
    id: 1,
    name: 'John Smith',
    email: 'deepak@gmail.com',
    location: 'Bangalore',
    survey: 'default'
  },
  {
    id: 2,
    name: 'Muhi Masri',
    email: 'arpan@gmail.com',
    location: 'Bangalore',
    survey: 'default'
  },
  {
    id: 3,
    name: 'Peter Adams',
    email: 'devansh@gmail.com',
    location: 'Bangalore',
    survey: 'default'
  },
  {
    id: 4,
    name: 'Lora Bay',
    email: 'astha@gmail.com',
    location: 'Bangalore',
    survey: 'default'
  },
];

const COLUMNS_SCHEMA = [
  {
    key: 'name',
    type: 'text',
    label: 'Full Name',
  },
  {
    key: 'email',
    type: 'text',
    label: 'Email Id',
  },
  {
    key: 'location',
    type: 'text',
    label: 'Location',
  },
  {
    key: 'survey',
    type: 'dropdown',
    label: 'Survey',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];


@Component({
  selector: 'app-email-group',
  standalone: true,
  imports: [
    CommonModule,
    SurveyModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  templateUrl: './email-group.component.html',
  styleUrls: ['./email-group.component.scss']
})
export default class EmailGroupComponent implements OnInit {
  selectedFood1: string;
  selectedFood2: string;
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  selectedValue: string;
  selectedCar: string;
  foods: { value: string; viewValue: string; }[];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.foods = [
      {value: 'default', viewValue: 'default'},
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  }
  
  addRow() {
    const newRow = {
      id: Date.now(),
      name: '',
      email: '',
      location: '',
      survey: '',
      isEdit: true,
    };
    this.dataSource = [newRow, ...this.dataSource];
  }

  public saveEmail(): void {
    console.log(this.dataSource, 'save');
  }

  onFoodSelection2(event) {
    console.log(event);
    console.log(this.onFoodSelection2);
  }
  removeRow(id) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  
  isAllSelected() {
    return this.dataSource.every((item: any) => item.isSelected);
  }

  isAnySelected() {
    return this.dataSource.some((item: any) => item.isSelected);
  }

  selectAll(event) {
    this.dataSource = this.dataSource.map((item: any) => ({
      ...item,
      isSelected: event.checked,
    }));
  }

}



