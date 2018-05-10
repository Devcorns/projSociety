import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

import { FlexLayoutModule } from '@angular/flex-layout';



import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SettingSenderService } from './settings/setting-sender.service';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

   
  ],
  declarations: [SettingsComponent, ViewComplaintComponent],
  providers:[SettingSenderService]
})
export class AdminModule { }
