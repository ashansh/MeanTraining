import {Pipe , PipeTransform} from '@angular/core';
@Pipe ({ name : 'reverse'})

export class ReverseStringPipe implements PipeTransform{
    transform(str: string): string{     ///////next string specifies the return type
        let revStr: string = "";
        for (let i = str.length -1; i >=0; i--){
            revStr += str.charAt(i);
        }
        return revStr;
    }
} 