import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewsModule} from '../views/views.module';
import {HeaderComponent} from './components/header/header.component';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
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
