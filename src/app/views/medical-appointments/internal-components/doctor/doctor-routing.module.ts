import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DoctorListComponent} from './doctor-list/doctor-list.component';
import {DoctorFormComponent} from './doctor-form/doctor-form.component';

const routes: Routes = [
  {path: '', component: DoctorListComponent},
  {path: 'form', component: DoctorFormComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule {
}
