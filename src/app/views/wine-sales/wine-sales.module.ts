import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WineSalesComponent} from './wine-sales.component';
import {WineSalesRoutingModule} from './wine-sales-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ WineSalesComponent ],
  imports: [
    CommonModule,
    WineSalesRoutingModule,
    MatCardModule,
    MatTabsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WineSalesModule { }
