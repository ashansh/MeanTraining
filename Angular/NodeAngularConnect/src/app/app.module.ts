import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { TemperatureComponent } from './temperature/temperature.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TemperatureComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule , HttpClientModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
