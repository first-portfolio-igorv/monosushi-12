import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminDiscountComponent } from './admin-discount/admin-discount.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminProductComponent } from './admin-product/admin-product.component';



const routes: Routes = [
  {
    path:"", component:AdminComponent, children:[
        {path:"admin-discount", component:AdminDiscountComponent},
        {path:"admin-category", component:AdminCategoryComponent},
        {path:"admin-order", component:AdminOrderComponent},
        {path:"admin-product", component:AdminProductComponent},
        {path:'', pathMatch:"full",redirectTo:'admin-discount'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
