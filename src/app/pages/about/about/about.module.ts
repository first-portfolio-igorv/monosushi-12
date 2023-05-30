import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about.component';
import { AboutRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule
  ]
})
export class AboutModule { }
