import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {ViewBaseComponent} from './components/view-base/view-base.component';

const routes: Routes = [
  { path: '', component: ViewBaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
