import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  pass : string;
  http : HttpClient;
  url = "http://127.0.0.1:3000/login";

  constructor(http : HttpClient){
    this.http = http;
  }

  submit(f:any){
    let data = JSON.stringify(f.value);
    this.http.post(this.url,data)
    .subscribe(res=> {
      alert("success");
      console.log(res);
      this.email = res.toString();
      this.pass = res.toString();
    }, err => {
      alert("error");
    })

  }
  ngOnInit() {
  }

}