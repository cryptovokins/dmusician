import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePlayerComponent } from './home-player.component';
import { Route, RouterModule } from '@angular/router';

const HomeRoute: Route = { path: '', component: HomePlayerComponent };


@NgModule({
  declarations: [
    HomePlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([HomeRoute])
  ]
})
export class HomePlayerModule { }
