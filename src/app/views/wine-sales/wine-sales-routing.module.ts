import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WineSalesComponent} from './wine-sales.component';

const routes: Routes = [
  { path: '', component: WineSalesComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class WineSalesRoutingModule { }
