import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
  <h3> NgSwitch
  <ul *ngFor = "let student of students"
  [ngSwitch]="student.country" >
  <li *ngSwitchCase ="'UK'" >
      {{student.name}}   ({{ "United Kingdom" | titlecase}})
  </li>
  <li *ngSwitchCase ="'US'" >
          {{student.name}}   ({{ "united states of america" | titlecase}})
          </li>
         
  <li *ngSwitchDefault>
      {{student.name}}  && {{student.country}}
  </li>        
</ul>

`,


////////////////////////////////////////////// using Inner HTML
  // template:
  // <h4> NgIf </h4>
  // <ul *ngFor = "let student of students" >
  // <li *ngIf = "student.age > 40">
  // {{student.name}} && {{student.age}}
  // </li>
  // </ul>
  // ` 
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name : string = "Ashansh";

  students : any = [
    { name : "raj" , age :45 , country : "US"},
    { name : "ashansh" , age :50 ,country : "UK"},
    { name : "anims" , age :33 , country : "INDIA"} ,
    { name : "ajay" , age :69 ,country:" XYZ"},
    { name : "mahesh" , age :21 , country: "UK"},
  ]
}
