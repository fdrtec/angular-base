import {RouterModule, Routes} from '@angular/router';
import {MedicalAppointmentsComponent} from './medical-appointments.component';
import {NgModule} from '@angular/core';
import {DoctorComponent} from './doctor/doctor.component';
import {PatientComponent} from './patient/patient.component';

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
