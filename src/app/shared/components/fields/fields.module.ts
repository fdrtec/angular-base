import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextComponent} from './input-text/input-text.component';
import {InputDateComponent} from './input-date/input-date.component';
import {InputSelectComponent} from './input-select/input-select.component';
import {InputTextAreaComponent} from './input-text-area/input-text-area.component';
import {InputNumberComponent} from './input-number/input-number.component';
import {MaterialDesignModule} from '../../../material-design/material-design.module';

@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputSelectComponent,
    InputTextAreaComponent,
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    MaterialDesignModule,
    InputTextComponent,
    InputDateComponent,
    InputSelectComponent,
    InputTextAreaComponent,
    InputNumberComponent
  ]
})
export class FieldsModule {
}
