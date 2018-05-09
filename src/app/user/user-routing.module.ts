import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComplaintComponent } from './file-complaint/file-complaint.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

const routes: Routes = [
  {path:"file-complaint",component:FileComplaintComponent},
  {path:"view-complaint",component:ViewComplaintComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
