import {NgModule} from '@angular/core';

import {ViewsRoutingModule} from './views-routing.module';
import {HomeComponent} from './home/home.component';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {ExamplesComponent} from './examples/examples.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, FrameworkInfoComponent, ExamplesComponent],
  imports: [
    SharedModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule {
}
