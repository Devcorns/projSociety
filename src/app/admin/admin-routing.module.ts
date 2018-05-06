import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { InchargeComponent } from './incharge/incharge.component';



const routes: Routes = [
  {
    path:"adminpanel",component:AdminpanelComponent
  },
  {
    path:"userpanel",component:UserpanelComponent
  },
  {
    path:"inchargepanel",component:InchargeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
