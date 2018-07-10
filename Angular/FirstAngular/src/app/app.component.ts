import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Name:string = 'Ashansh';
  a:number =20;
  b =10;
  inr = 5000;
  today: number = Date.now();

  arr:any = [10,20,30];

  add(){
    return this.a + this.b;
  }

  factorial (n:number){
    let fact:number = 1;
    for(let i:number =1; i<=n;i++){
      fact *= i
    }
    return fact;
  }

  f3(){
    alert ("Button Clicked");
  }

  x :any =[
    {Name : "Ashansh",
    Age : 12,
      City : "ujn"
    },
    {Name : "Aman",
    Age : 12,
      City : "asdg"
    },
    {Name : "rik",
    Age : 12,
      City : "uidr"
    }
  ]

  f4(){
    alert("ClientX");
    alert("ClientY");
  }

emp :any =
    {Name : "Ashansh",
    Age : 12,
      City : "ujn"
    } 
}
