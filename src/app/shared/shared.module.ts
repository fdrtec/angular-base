import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextComponent} from './components/fields/input-text/input-text.component';
import {InputDateComponent} from './components/fields/input-date/input-date.component';
import {InputSelectComponent} from './components/fields/input-select/input-select.component';
import {InputTextAreaComponent} from './components/fields/input-text-area/input-text-area.component';
import {InputNumberComponent} from './components/fields/input-number/input-number.component';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [InputTextComponent, InputDateComponent, InputSelectComponent, InputTextAreaComponent, InputNumberComponent],
    imports: [
        CommonModule,
        MaterialDesignModule,
        ReactiveFormsModule,
        //HttpClientModule,

    ],
  exports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    //HttpClientModule,
    InputTextComponent,
    InputDateComponent,
    InputSelectComponent,
    InputTextAreaComponent,
    InputNumberComponent,
  ]
})
export class SharedModule { }
