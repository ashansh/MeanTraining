import { Component } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to_do_list';
  arr:string;
  list=[];

addToList(){
  for (let i =0 ;i<10;i++){
    this.arr= this.list[i];
  }
  return this.arr;
}
}
