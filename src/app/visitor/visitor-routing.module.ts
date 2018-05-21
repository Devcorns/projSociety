import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterVisitorComponent } from './register-visitor/register-visitor.component';


const routes: Routes = [
  {path:"register-visitor",component:RegisterVisitorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
