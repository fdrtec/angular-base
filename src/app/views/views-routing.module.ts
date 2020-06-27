import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'framework-info', component: FrameworkInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
