import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorListComponent} from './doctor-list/doctor-list.component';
import {DoctorFormComponent} from './doctor-form/doctor-form.component';
import {SharedModule} from '../../../../shared/shared.module';
import {DoctorRoutingModule} from './doctor-routing.module';


@NgModule({
  declarations: [DoctorListComponent, DoctorFormComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule
  ],
})
export class DoctorModule {
}
