import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientRoutingModule} from './patient-routing.module';
import { PatientFormComponent } from './patient-form/patient-form.component';
import {SharedModule} from '../../../../shared/shared.module';


@NgModule({
  declarations: [PatientFormComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule
  ]
})
export class PatientModule { }
