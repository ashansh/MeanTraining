import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  ////////////////////////////////////// Validators Validations///////////////////////////////

    // loginForm = new FormGroup(
    //   {
    //     name : new FormControl("abc" , [ Validators.required]),
    //     password : new FormControl('abc@123',[ Validators.required , Validators.minLength(3)])
    //   }
    // )

    
    // send(){
    //   if(this.sampleform.valid){
    //     alert("valid");
    //   }
    //   else
    //   alert ("invalid");

    // }

    ///////////////////////////////////// Validate URL ////////////////////////////////////

    sampleform = new FormGroup({
      name : new FormControl('abc' , [Validators.required , Validators.minLength(3)]),
      url : new FormControl("", [Validators.required , this.validateUrl])
    })

    validateUrl(control: AbstractControl){
      if(!control.value.startsWith('https') ||
       !control.value.includes('.io')){
        return {invalidUrl : true }
      }
      return null;
    }

    send(){
      if(this.sampleform.valid){
        alert("valid");
      }
      else
      alert ("invalid");

    }
  

  ngOnInit() {
  }

}
