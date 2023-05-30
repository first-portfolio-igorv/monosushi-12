import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product/product-info/product-info.component';
import { ProductService } from './shared/services/product/product.service';
import { DiscountService } from './shared/services/discount/discount.service';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { CabinetGuard } from './shared/guards/cabinet/cabinet.guard';
import { DiscountInfoComponent } from './pages/discount/discount-info/discount-info.component';
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"admin", 
  canActivate:[AuthGuard],
  loadChildren:()=> import("./admin/admin.module").then(m => m.AdminModule)},
  {path:"cabinet", 
  canActivate:[CabinetGuard],
  loadChildren:()=> import("./pages/cabinet/cabinet/cabinet.module").then(m=>m.CabinetModule)},
  {path:"auth",
  loadChildren:()=> import("./components/auth-dialog/auth/auth.module").then(m=>m.AuthModule)},
  {path:"delivery", 
  loadChildren:()=> import("./pages/delivery/delivery/delivery.module").then(m=>m.DeliveryModule)},
  {path:"mobile", 
  loadChildren:()=> import("./components/mobile-dialog/mobile/mobile.module").then(m=>m.MobileModule)},
  {path:"home", 
  loadChildren:()=> import("./pages/home/home/home.module").then(m=>m.HomeModule)},
  {path:"discount", 
  loadChildren:()=> import("./pages/discount/discount/discount.module").then(m=>m.DiscountModule)},
  
  {path:"product/:category", 
  loadChildren:()=>import("./pages/product/product/product.module").then(m=>m.ProductModule)},
  {path:"product-info/:category/:id", component:ProductInfoComponent,
  resolve:{
    productInfo:ProductService
  }},
  {path:"about", 
  loadChildren:()=>import("./pages/about/about/about.module").then(m=>m.AboutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
