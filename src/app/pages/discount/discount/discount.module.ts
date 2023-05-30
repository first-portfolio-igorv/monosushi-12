import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from '../discount.component';
import { DiscountRoutingModule } from './discount-routing.module';
import { FormsModule } from '@angular/forms';
import { DiscountInfoComponent } from '../discount-info/discount-info.component';



@NgModule({
  declarations: [
    DiscountComponent,
    DiscountInfoComponent
  ],
  imports: [
    CommonModule,
    DiscountRoutingModule,
    FormsModule
  ]
})
export class DiscountModule { }
