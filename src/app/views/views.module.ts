import {NgModule} from '@angular/core';

import {ViewsRoutingModule} from './views-routing.module';
import {HomeComponent} from './home/home.component';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {ExamplesComponent} from './examples/examples.component';
import {SharedModule} from '../shared/shared.module';
import {WineSalesModule} from './wine-sales/wine-sales.module';
import {FormExampleComponentComponent} from './examples/formExample/form-example-component/form-example-component.component';
import {MedicalAppointmentsModule} from './medical-appointments/medical-appointments.module';

@NgModule({
  declarations: [
    HomeComponent,
    FrameworkInfoComponent,
    ExamplesComponent,
    FormExampleComponentComponent,
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule,
    WineSalesModule,
    MedicalAppointmentsModule

  ],
  exports: [
    SharedModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule {
}
