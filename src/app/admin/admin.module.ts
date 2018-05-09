import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

import { FlexLayoutModule } from '@angular/flex-layout';



import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule

   
  ],
  declarations: [SettingsComponent, ViewComplaintComponent],
  providers:[]
})
export class AdminModule { }
