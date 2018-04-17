import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { OwnerRegisterService } from './owner-register.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [OwnerRegisterService]
})
export class SignupComponent implements OnInit {
 
  signupForm: FormGroup;
  constructor(formbuilder:FormBuilder,private registerService:OwnerRegisterService) { 
    console.log("constructor works");
    this.signupForm = formbuilder.group({
      email:["",Validators.required],
     mobile:["",Validators.required],
       passwordOne:["",Validators.required],
       passwordRe:["",Validators.required]
    });

    //console.log(this.registerService.registerOwner());
  }




  signupform(data){
    console.log(data);
    this.registerService.registerOwner()
    .subscribe(data=>{
      console.log(this);
    });

  }
  ngOnInit() {
  }

}
