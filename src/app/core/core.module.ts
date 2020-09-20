import {NgModule} from '@angular/core';
import {ViewBaseComponent} from './components/view-base/view-base.component';
import {CoreRoutingModule} from './core-routing.module';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    ViewBaseComponent
  ],

  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialDesignModule,

    // RouterModule,


    // HttpClientModule
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: [
    ViewBaseComponent,
    MaterialDesignModule,

    //HttpClientModule,
    //CoreRoutingModule
  ],
})
export class CoreModule {
}
