import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';


import { FlexLayoutModule } from '@angular/flex-layout';

import { VisitorRoutingModule } from './visitor-routing.module';
import { RegisterVisitorComponent } from './register-visitor/register-visitor.component';

@NgModule({
  imports: [
    CommonModule,
    VisitorRoutingModule,
    
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule
  ],
  declarations: [RegisterVisitorComponent]
})
export class VisitorModule { }
