import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from '../cabinet.component';
import { FormsModule } from '@angular/forms';
import { CabinetRoutingModule } from './cabinet-routing.module';



@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CabinetRoutingModule
  ]
})
export class CabinetModule { }
