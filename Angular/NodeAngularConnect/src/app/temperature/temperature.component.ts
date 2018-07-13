import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  http : HttpClient;
  celcius : string;
  data : any;

  // ref : backend : node 3_http_module..js
  url="http://127.0.0.1:3000/W";

  constructor( http: HttpClient) {
    this.http = http
   }

   submit(f:any){
     let data = JSON.stringify(f.value);
     this.http.post(this.url,data).subscribe((res)=>{
      alert("success")
      console.log("Response" +res);
      this.celcius = res.toString();
     }, (err)=>{
       alert("error");
     })
   }

  ngOnInit() {
  }

}

