import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileDialogComponent } from '../mobile-dialog.component';




const routes: Routes = [
  {
    path:"", component:MobileDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }