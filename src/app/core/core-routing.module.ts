import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', loadChildren: '../views/views.module#ViewsModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
