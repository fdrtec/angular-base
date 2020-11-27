import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ViewsRoutingModule} from './views-routing.module';
import {FrameworkInfoComponent} from './framework-info/framework-info.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {MedicalAppointmentsModule} from './medical-appointments/medical-appointments.module';
import { AboutComponent } from './about/about.component';
import {CollapseModule} from "ngx-bootstrap/collapse";

@NgModule({
  declarations: [
    HomeComponent,
    FrameworkInfoComponent,
    AboutComponent
  ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        SharedModule,
        //WineSalesModule,
        MedicalAppointmentsModule,
        CollapseModule
    ],
  exports: [
    SharedModule
  ]
})
export class ViewsModule {
}
