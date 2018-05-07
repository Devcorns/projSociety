import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { InchargeComponent } from './incharge/incharge.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
   
  ],
  declarations: [AdminpanelComponent, UserpanelComponent, InchargeComponent],
  providers:[]
})
export class AdminModule { }
