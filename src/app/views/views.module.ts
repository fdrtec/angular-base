import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ExamplesComponent} from './examples/examples.component';
import {FormExampleComponentComponent} from './examples/formExample/form-example-component/form-example-component.component';
import {ViewsRoutingModule} from './views-routing.module';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {MedicalAppointmentsModule} from './medical-appointments/medical-appointments.module';

@NgModule({
  declarations: [
    HomeComponent,
    FrameworkInfoComponent,
    //ExamplesComponent,
    //FormExampleComponentComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    //WineSalesModule,
    MedicalAppointmentsModule
  ],
  exports: [
    SharedModule
  ]
})
export class ViewsModule {
}
