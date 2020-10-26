import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';
import { FrameworkInfoComponent } from './framework-info/framework-info.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MedicalAppointmentsModule } from './medical-appointments/medical-appointments.module';
import { DioModule } from './dio/dio.module';

@NgModule({
    declarations: [
        HomeComponent,
        FrameworkInfoComponent
    ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        SharedModule,
        //WineSalesModule,
        MedicalAppointmentsModule,
        DioModule
    ],
    exports: [
        SharedModule
    ]
})
export class ViewsModule {
}
