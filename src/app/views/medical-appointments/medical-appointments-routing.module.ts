import {RouterModule, Routes} from '@angular/router';
import {MedicalAppointmentsComponent} from './medical-appointments.component';
import {NgModule} from '@angular/core';
import {PatientComponent} from './internal-components/patient/patient.component';

const routes: Routes = [
  {
    path: '', component: MedicalAppointmentsComponent, children: [
      {path: 'doctor', loadChildren: './internal-components/doctor/doctor.module#DoctorModule'},
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
