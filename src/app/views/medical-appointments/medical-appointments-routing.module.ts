import {RouterModule, Routes} from '@angular/router';
import {MedicalAppointmentsComponent} from './medical-appointments.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {DoctorComponent} from './internal-components/doctor/doctor.component';
import {PatientComponent} from './internal-components/patient/patient.component';

const routes: Routes = [
  {
    path: '', component: MedicalAppointmentsComponent, children: [
      {path: 'doctor', component: DoctorComponent},
      {path: 'patient', component: PatientComponent}
      // {path: 'list', component: null},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalAppointmentsRoutingModule {

}
