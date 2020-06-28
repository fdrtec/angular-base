import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewsModule} from '../views/views.module';
import {HeaderComponent} from './components/header/header.component';
import {MaterialDesignModule} from '../material-design/material-design.module';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ViewsModule,
    MaterialDesignModule,
  ]
})
export class CoreModule {
}
