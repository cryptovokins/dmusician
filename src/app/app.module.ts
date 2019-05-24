import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { DialogModule } from './components/dialog/dialog.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
