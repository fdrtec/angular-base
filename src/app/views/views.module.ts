import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ExamplesComponent} from './examples/examples.component';
import {FormExampleComponentComponent} from './examples/formExample/form-example-component/form-example-component.component';
import {ViewsRoutingModule} from './views-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    //FrameworkInfoComponent,
    ExamplesComponent,
    FormExampleComponentComponent,
  ],
  imports: [
    ViewsRoutingModule
    //SharedModule,
    //MaterialDesignModule,

    //CoreRoutingModule,
    //WineSalesModule,
    //MedicalAppointmentsModule
  ],
  exports: [
    //SharedModule,
    //MaterialDesignModule
    //ViewsRoutingModule,
  ]
})
export class ViewsModule {
}
