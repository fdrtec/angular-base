import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedicalAppointmentsRoutingModule} from './medical-appointments-routing.module';
import {MedicalAppointmentsService} from './services/medical-appointments.service';
import {MedicalAppointmentsComponent} from './medical-appointments.component';
import {SharedModule} from '../../shared/shared.module';
import {DoctorModule} from './internal-components/doctor/doctor.module';

@NgModule({
  declarations: [
    MedicalAppointmentsComponent
  ],
  imports: [
    CommonModule,
    MedicalAppointmentsRoutingModule,
    DoctorModule,
    SharedModule
  ],
  exports: [],
  providers: [MedicalAppointmentsService]

})
export class MedicalAppointmentsModule {
}
