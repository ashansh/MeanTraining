import { Component, OnInit } from '@angular/core';
import {ConversionService} from './conversion.service';


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
  providers :[ConversionService]
})
export class ConversionComponent implements OnInit {

  conversion : ConversionService;
  farhen : number;
  cel : number;
  resFar : number;
  resCel : number;


  constructor(conversion :ConversionService) { 
    this.conversion = conversion;
  }

  convertCelcius(){
    this.resCel = this.conversion.convertCelcius(this.farhen);
  }

  convertFarheneit(){
    this.resFar = this.conversion.convertFarheneit(this.cel);
  }

  ngOnInit() {
  }

}
