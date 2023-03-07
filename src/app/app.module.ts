import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MaterialModule ],
  declarations: [ AppComponent, HelloComponent ,ProgressBarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
