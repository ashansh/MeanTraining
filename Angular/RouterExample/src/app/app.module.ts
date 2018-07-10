import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { RectangleComponent } from './rectangle/rectangle.component'
//import { AppModuleNew } from 'C:\Users\pcuser\Desktop\Angular\MongoDB_Assignments\Angular\ServicesAngular\src\app'


const routes : Routes = [
  { path : 'about', component : AboutComponent},
  { path : 'home', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register' , component : RegisterComponent},
  { path : '', component : HomeComponent},
  { path : 'rectangle', component : RectangleComponent},
  { path : '**', component : PageNotFoundComponent}


];



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    NavBarComponentComponent,
    RectangleComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes) , FormsModule //AppModuleNew
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
