import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
  ],
  entryComponents:[
    DialogComponent
  ],
  exports:[
    DialogComponent
  ]
})
export class DialogModule { }
