import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewsModule} from '../views/views.module';
import {HeaderComponent} from './components/header/header.component';
import {MaterialDesignModule} from '../material-design/material-design.module';


@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ViewsModule,
    MaterialDesignModule,
  ]
})
export class CoreModule {
}
