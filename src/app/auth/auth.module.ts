import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthRoutingModule} from "./auth.routing";


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
