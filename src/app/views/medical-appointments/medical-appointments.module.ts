import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MedicalAppointmentsRoutingModule} from './medical-appointments-routing.module';
import {MedicalAppointmentsService} from './medical-appointments.service';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedicalAppointmentsRoutingModule
  ],
  providers: [MedicalAppointmentsService]
})
export class MedicalAppointmentsModule { }
