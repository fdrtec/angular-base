import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {FieldsModule} from './components/fields/fields.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldsModule
  ],
  exports: [
    FieldsModule
  ]
})

export class SharedModule {
}
