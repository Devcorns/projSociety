import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  cookieValue = '';
  
  loginForm:FormGroup;

  constructor(formBuilder:FormBuilder,private cookieService: CookieService) { 
     this.loginForm = formBuilder.group({
      flatNo:new FormControl("",[Validators.minLength(3)]),
      passwordOne:new FormControl("",Validators.minLength(8)),
      rememberMe:new FormControl("")

     });

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
    console.log(data);
  }


}
