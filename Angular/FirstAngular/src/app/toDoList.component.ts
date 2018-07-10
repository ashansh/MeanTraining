import { Component } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})
export class ToDoList {
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
