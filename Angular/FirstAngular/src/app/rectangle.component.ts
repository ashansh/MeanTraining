import { Component } from '@angular/core';

@Component({
    selector: 'rectangle',
    templateUrl :'./rectangle.component.html',
    styleUrls :['./rectangle.component.css']
})

export class Rectangle{
    length : number ;
    breadth : number ;
    Area : number;

    calculateArea(){
        this.Area = this.length * this.breadth;
        return this.Area;
    }
    calculatePerimeter(){
        return 2*(this.length + this.breadth);
    }
}