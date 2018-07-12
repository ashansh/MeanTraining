import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  http : HttpClient

  // ref : backend : node 3_http_module..js
  url="http://127.0.0.1:3000/lnt";

  constructor(http : HttpClient) {
    this.http = http;
    this.http.get(this.url,{responseType:'text'})
    .subscribe(response =>{
      console.log("Response = " +response);
      alert(response.toString());
    },
    (error)=>{ //change the port number and check
      alert("Error");
    }) // better to put it in nginit
   }

  ngOnInit() {
  }

}
