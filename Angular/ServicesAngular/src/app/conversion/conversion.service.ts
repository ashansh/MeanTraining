import { Injectable } from '@angular/core';
@Injectable()


export class ConversionService{
    convertFarheneit( celcius : number){

        return (celcius*1.8)+32;        
    //  farhen = (celcius*1.8)+32;
    //  return farhen;
    }

    convertCelcius(farhen : number){
        return (farhen-32)/1.8
    }
}