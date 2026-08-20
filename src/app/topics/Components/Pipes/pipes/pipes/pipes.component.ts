import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipe } from '../../custom-pipes/custom-pipes.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    SlicePipe,
    JsonPipe,
    PercentPipe,
    CurrencyPipe,
    CustomPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  UserName = 'Ahmed';
  UserData = new Date();
  AllUserName = 'Ahmed Karem';
  DataObject = {
    name: 'Ahmed Ali',
    age: 28,
  };
  discount = 0.7;
  salary = 5000;
  test = 'TEST CUSTOM PIPES'
}
