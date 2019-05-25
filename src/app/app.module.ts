import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LoginModule } from './login/login.module';
import { HomePlayerModule } from './home-player/home-player.module';

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
    SharedModule,
    RouterModule.forRoot(routes),
    LoginModule,
    HomePlayerModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
