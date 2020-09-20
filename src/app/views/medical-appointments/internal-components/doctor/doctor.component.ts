import {Component, Injector} from '@angular/core';
import {Doctor} from '../../models/doctor';
import {BaseResourceFormComponent} from '../../../../shared/components/base-resource-form/base-resource-form.component';
import {MedicalAppointmentsService} from '../../medical-appointments.service';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent extends BaseResourceFormComponent<Doctor> {

  constructor(protected medicalAppointmentsService: MedicalAppointmentsService, protected injector: Injector) {
    // @ts-ignore
    super(injector, new Doctor(), medicalAppointmentsService, Doctor.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null],
      password: [null],
      phoneNumber: [null],
      specialization: [null],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Médico';
  }

  protected editionPageTitle(): string {
    // @ts-ignore
    const doctorName = this.resource.name || '';
    return 'Editando Médico: ' + doctorName;
  }

}



