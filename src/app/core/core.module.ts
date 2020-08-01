import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewsModule} from '../views/views.module';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ViewBaseComponent} from './components/view-base/view-base.component';


@NgModule({
  declarations: [ViewBaseComponent],
  exports: [
    ViewBaseComponent
  ],
  imports: [
    CommonModule,
    ViewsModule,
    MaterialDesignModule,
    RouterModule,
    FlexLayoutModule

  ]
})
export class CoreModule {
}
