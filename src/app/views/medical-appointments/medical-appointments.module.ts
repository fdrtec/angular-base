import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedicalAppointmentsRoutingModule} from './medical-appointments-routing.module';
import {MedicalAppointmentsService} from './medical-appointments.service';
import {DoctorComponent} from './internal-components/doctor/doctor.component';
import {PatientComponent} from './internal-components/patient/patient.component';
import {MedicalAppointmentsComponent} from './medical-appointments.component';

@NgModule({
  declarations: [MedicalAppointmentsComponent, DoctorComponent, PatientComponent],
  imports: [
    CommonModule,
    MedicalAppointmentsRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [MedicalAppointmentsService]

})
export class MedicalAppointmentsModule {
}
