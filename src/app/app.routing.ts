import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthModule } from "./auth/auth.module";

const routes: Routes = [
    { path: "home", component: HomeComponent},
    {path:"auth",loadChildren:"./auth/auth.module#AuthModule"}
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}