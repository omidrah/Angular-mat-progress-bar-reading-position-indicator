import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {

  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MAT_CHECKBOX_CLICK_ACTION,
  MatListModule,
  MatProgressBarModule
  
  } from '@angular/material';

@NgModule({
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [

  ],
  
  declarations: []
})
export class MaterialModule { }
