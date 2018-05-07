import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from "./login.service";
import { CanActivate, Router } from '@angular/router';
import { LoginGuardService } from '../../services/guard-services/login-guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService,LoginGuardService]
  
})
export class LoginComponent implements OnInit {
 


  cookieValue = '';
  value ='';
  
  loginForm:FormGroup;

  constructor(formBuilder:FormBuilder,private cookieService: CookieService,private loginService:LoginService,private router:Router) { 
     this.loginForm = formBuilder.group({
      username:new FormControl("",[Validators.minLength(3),Validators.required]),
      passwordOne:new FormControl("",[Validators.minLength(8),Validators.required]),
      rememberMe:new FormControl("")

     })

  }

  ngOnInit() {
    
    
  }
  rememberMeCheck(){
    this.cookieService.set('Test', 'value set' );
    this.cookieValue = this.cookieService.get('Test');
    console.log(this.cookieValue);
  }


  loginform(data){
    
    if(data.value.rememberMe==true){
      this.rememberMeCheck();
    }

  

   
    this.loginService.loginConnect(data).subscribe(result=>{
      


      if(result.value){
        console.log("Credentials okay");
        this.router.navigate(['admin/userpanel']);

      }
      else{
        console.log("Credentials not okay");
      }
      
    },err=>{
      console.log(err)
    })
  }


}
