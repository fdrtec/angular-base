import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {ExamplesComponent} from './examples/examples.component';
import {WineSalesComponent} from './wine-sales/wine-sales.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'examples', component: ExamplesComponent},
  { path: 'wine-sales-info', component: WineSalesComponent},
  { path: 'framework-info', component: FrameworkInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
