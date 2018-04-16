import { Router,RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Route, Routes } from "@angular/router/src/config";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes : Routes = [
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {
    
    }

