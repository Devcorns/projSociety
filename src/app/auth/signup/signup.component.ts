import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(formbuilder:FormBuilder) { 
    console.log("constructor works");
    this.signupForm = formbuilder.group({
      email:["",Validators.required],
     mobile:["",Validators.required],
       passwordOne:["",Validators.required],
       passwordRe:["",Validators.required]
    });
  }
  signupform(data){
    console.log(data);
  }
  ngOnInit() {
  }

}
