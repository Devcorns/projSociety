import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { OwnerRegisterService } from './owner-register.service'
import { PasswordValidationService } from './password-validation.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [OwnerRegisterService,PasswordValidationService]
})
export class SignupComponent implements OnInit {
 
  signupForm: FormGroup;
  constructor(formbuilder:FormBuilder,private registerService:OwnerRegisterService) { 
    console.log("constructor works");
    this.signupForm = formbuilder.group({
      email:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern('^[0-9]{10}$')]),
       passwordOne:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('')]),
       passwordRe:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern(''),PasswordValidationService.MatchPassword])
    });

    

  
  }
  
  



  signupform(data){
    // console.log(data);
    this.registerService.registerOwner(data)
    .subscribe(response=>{
      //console.log("now response is "+response);
    },err=>{
      console.log(err);
    });

  }
  ngOnInit() {
  }

}
