import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule } from '@angular/common/http';




import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthRoutingModule} from "./auth.routing";


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers:[CookieService]
})
export class AuthModule { }
