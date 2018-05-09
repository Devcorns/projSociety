import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { FileComplaintComponent } from './file-complaint/file-complaint.component';


import { FlexLayoutModule } from '@angular/flex-layout';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
   
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FileComplaintComponent, ViewComplaintComponent]
})
export class UserModule { }
