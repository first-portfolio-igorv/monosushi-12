import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileDialogComponent } from '../mobile-dialog.component';
import { MobileRoutingModule } from './mobile-routine.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MobileDialogComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    FormsModule
  ]
})
export class MobileModule { }
