import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrameworkInfoComponent } from './framework-info/framework-info.component';
import { BootcampEverisComponent } from './dio/bootcamp-everis/bootcamp-everis.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'medical-appointments', loadChildren: './medical-appointments/medical-appointments.module#MedicalAppointmentsModule' },
    { path: 'framework-info', component: FrameworkInfoComponent },
    { path: 'dio', component: BootcampEverisComponent },

    // { path: 'examples', component: ExamplesComponent},
    // { path: 'wine-sales-info', loadChildren: './wine-sales/wine-sales.module#WineSalesModule'},
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ViewsRoutingModule {
}
