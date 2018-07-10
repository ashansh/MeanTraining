import { Injectable } from '@angular/core';
@Injectable()



export class RectangleService{
    calculateArea(length : number, bredth :number){
        return length * bredth;
    }

    calculatePerimeter(length : number , bredth: number){
        return 2*(length+bredth);
    }
}

