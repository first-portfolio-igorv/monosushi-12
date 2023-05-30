import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminDiscountComponent } from './admin-discount/admin-discount.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AdminCategoryComponent,
    AdminDiscountComponent,
    AdminOrderComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
