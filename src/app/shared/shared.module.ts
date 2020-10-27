import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {FieldsModule} from './components/fields/fields.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FieldsModule,
    FontAwesomeModule
  ],
  exports: [
    FieldsModule,
    MaterialDesignModule,
  ]
})

export class SharedModule {
}
