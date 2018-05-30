import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';


import { FlexLayoutModule } from '@angular/flex-layout';

import { VisitorRoutingModule } from './visitor-routing.module';
import { RegisterVisitorComponent } from './register-visitor/register-visitor.component';
import { DialogSectionComponent } from './dialog-section/dialog-section.component';

@NgModule({
  imports: [
    CommonModule,
    VisitorRoutingModule,
    
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogSectionComponent],
  declarations: [RegisterVisitorComponent, DialogSectionComponent]
})
export class VisitorModule { }
