import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from '../delivery.component';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    FormsModule
  ]
})
export class DeliveryModule { }
