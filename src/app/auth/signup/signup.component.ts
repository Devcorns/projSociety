import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { OwnerRegisterService } from './owner-register.service'
import { PasswordValidationService } from './password-validation.service';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [OwnerRegisterService,PasswordValidationService]
})
export class SignupComponent implements OnInit {
 
  signupForm: FormGroup;
  constructor(formbuilder:FormBuilder,private registerService:OwnerRegisterService,public snackBar:MatSnackBar) { 
    console.log("constructor works");
    this.signupForm = formbuilder.group({
      towerno:new FormControl("",[Validators.required,Validators.minLength(1)]),
      flatno:new FormControl("",[Validators.required,Validators.minLength(3)]),
      email:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      username:new FormControl(""),
      mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern('^[0-9]{10}$')]),
       passwordOne:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('')]),
       passwordRe:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(''),PasswordValidationService.MatchPassword])
    
      });

    

  
  }
  
  



  signupform(data){
     console.log(data.value.username = data.value.towerno+data.value.flatno);
    
    this.registerService.registerOwner(data)
    .subscribe(response=>{
      if(response.value){
        this.openSnackBarUserRegister();
      }else{
        
        this.openSnackBarAlreadyExist();
       

      }
    },err=>{
      console.log(err);
    });

  }

  openSnackBarAlreadyExist() {
    this.snackBar.open('User Already Exist', "Try Another User", {
      duration: 10000});
  }
  openSnackBarUserRegister() {
    this.snackBar.open('User Registered', "Login Now", {
      duration: 10000});
  }
  ngOnInit() {
  }

}
