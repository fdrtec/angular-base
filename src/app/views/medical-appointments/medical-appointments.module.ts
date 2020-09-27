import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedicalAppointmentsRoutingModule} from './medical-appointments-routing.module';
import {MedicalAppointmentsService} from './services/medical-appointments.service';
import {MedicalAppointmentsComponent} from './medical-appointments.component';
import {SharedModule} from '../../shared/shared.module';
import {DoctorModule} from './internal-components/doctor/doctor.module';
import {PatientModule} from './internal-components/patient/patient.module';

@NgModule({
  declarations: [
    MedicalAppointmentsComponent
  ],
  imports: [
    CommonModule,
    MedicalAppointmentsRoutingModule,
    DoctorModule,
    PatientModule,
    SharedModule
  ],
  exports: [SharedModule],
  providers: [MedicalAppointmentsService]

})
export class MedicalAppointmentsModule {
}
