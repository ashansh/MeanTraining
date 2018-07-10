import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css']
})
export class NavBarComponentComponent implements OnInit {

  router : Router;

  constructor(router : Router) {
    this.router = router;
   }

   goHome(){
     this.router.navigate(['home']);
   }

   goAbout(){
     this.router.navigate(['about']);
   }

   goLogin(){
     this.router.navigate(['login']);
   }

   goRectangle(){
     this.router.navigate(['rectangle']);
   }

  ngOnInit() {
  }

}
