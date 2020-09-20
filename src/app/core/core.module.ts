import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ViewBaseComponent} from './components/view-base/view-base.component';
import {CoreRoutingModule} from './core-routing.module';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {CommonModule} from '@angular/common';
import {ViewsModule} from '../views/views.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ViewBaseComponent
  ],

  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialDesignModule,
    ViewsModule,
    // RouterModule,
    HttpClientModule
  ],
  //** schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: [
    ViewBaseComponent,
    MaterialDesignModule,
    HttpClientModule,
    //CoreRoutingModule
  ],
})
export class CoreModule {
}
