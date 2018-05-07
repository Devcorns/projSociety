import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from "./app.routing";

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';






/**
 * Material imports
 */



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
   
 
    BrowserAnimationsModule,
 
    RouterModule,
    AppRoutingModule,
    AuthModule,

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
