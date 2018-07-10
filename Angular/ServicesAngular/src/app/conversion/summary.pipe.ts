import {Pipe , PipeTransform} from '@angular/core';
@Pipe ({ name : 'summary'})

export class SummaryStringPipe implements PipeTransform{
    transform(str: string, value1 : number , value2: number): string{
       let tempStr:string;
        tempStr = str.substring(value1 , value2);
      return tempStr;
    }
      
}