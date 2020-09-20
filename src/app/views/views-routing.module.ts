import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // { path: 'examples', component: ExamplesComponent},
  // { path: 'wine-sales-info', loadChildren: './wine-sales/wine-sales.module#WineSalesModule'},
  {path: 'medical-appointments', loadChildren: './medical-appointments/medical-appointments.module#MedicalAppointmentsModule'},
  //{path: 'framework-info', component: FrameworkInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
