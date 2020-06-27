import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { FrameworkInfoComponent } from './framework-info/framework-info.component';


@NgModule({
  declarations: [HomeComponent, FrameworkInfoComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
