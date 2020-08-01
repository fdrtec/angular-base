import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewsRoutingModule} from './views-routing.module';
import {HomeComponent} from './home/home.component';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {MaterialDesignModule} from '../material-design/material-design.module';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [HomeComponent, FrameworkInfoComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MaterialDesignModule
  ]
})
export class ViewsModule {
}
