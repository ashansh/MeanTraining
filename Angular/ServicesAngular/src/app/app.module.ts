import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { FormsModule } from '@angular/forms';
import { ConversionComponent } from './conversion/conversion.component';
import { ReverseStringPipe } from './conversion/reverse.pipe';
import { SummaryStringPipe } from  './conversion/summary.pipe';
import { Route } from '@angular/compiler/src/core';
import {Routes , RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    ConversionComponent,
    ReverseStringPipe,
    SummaryStringPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  exports :[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

