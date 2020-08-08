import {NgModule} from '@angular/core';

import {ViewsRoutingModule} from './views-routing.module';
import {HomeComponent} from './home/home.component';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {ExamplesComponent} from './examples/examples.component';
import {SharedModule} from '../shared/shared.module';
import { WineSalesComponent } from './wine-sales/wine-sales.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [HomeComponent, FrameworkInfoComponent, ExamplesComponent, WineSalesComponent],
  imports: [
    SharedModule,
    ViewsRoutingModule,
    MatCardModule,
    MatTabsModule,
  ]
})
export class ViewsModule {
}
