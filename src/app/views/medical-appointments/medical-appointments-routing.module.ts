import {RouterModule, Routes} from '@angular/router';
import {MedicalAppointmentsComponent} from './medical-appointments.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '', component: MedicalAppointmentsComponent, children: [
      // {path: 'doctor', component: null},
      // {path: 'patient', component: null},
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
