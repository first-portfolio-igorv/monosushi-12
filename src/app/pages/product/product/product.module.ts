import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
