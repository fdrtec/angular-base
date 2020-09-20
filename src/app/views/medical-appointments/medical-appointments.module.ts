import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedicalAppointmentsRoutingModule} from './medical-appointments-routing.module';
import {MedicalAppointmentsService} from './medical-appointments.service';
import {DoctorComponent} from './internal-components/doctor/doctor.component';
import {PatientComponent} from './internal-components/patient/patient.component';
import {MedicalAppointmentsComponent} from './medical-appointments.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialDesignModule} from '../../material-design/material-design.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [MedicalAppointmentsComponent, DoctorComponent, PatientComponent],
  imports: [
    CommonModule,
    MedicalAppointmentsRoutingModule,
    ReactiveFormsModule,
    // MatCardModule,
    // MatButtonModule,
    // MatIconModule,
    // FlexLayoutModule,
    SharedModule
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [MedicalAppointmentsService]

})
export class MedicalAppointmentsModule {
}
