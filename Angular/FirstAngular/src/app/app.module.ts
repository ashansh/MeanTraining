import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Rectangle } from './rectangle.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent ,Rectangle
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
