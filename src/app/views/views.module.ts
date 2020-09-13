import {NgModule} from '@angular/core';

import {ViewsRoutingModule} from './views-routing.module';
import {HomeComponent} from './home/home.component';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {ExamplesComponent} from './examples/examples.component';
import {SharedModule} from '../shared/shared.module';
import {WineSalesModule} from './wine-sales/wine-sales.module';

@NgModule({
  declarations: [
    HomeComponent,
    FrameworkInfoComponent,
    ExamplesComponent,
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule,
    WineSalesModule
  ],
  exports: [
    SharedModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule {
}
