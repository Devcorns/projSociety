import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';




const routes: Routes = [
  {
    path:"settings",component:SettingsComponent
  },
  // {
  //   path:"userpanel",component:UserpanelComponent
  // },
  // {
  //   path:"inchargepanel",component:InchargeComponent
  // },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
