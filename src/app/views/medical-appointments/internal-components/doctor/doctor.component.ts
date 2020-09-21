import {Component, OnInit} from '@angular/core';
import {MedicalAppointmentsService} from '../../medical-appointments.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectValues} from '../../../../shared/constants/project-values';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})

export class DoctorComponent implements OnInit {

  doctorForm: FormGroup;
  projectValues;

  constructor(private fb: FormBuilder,
              private medicalAppointmentsService: MedicalAppointmentsService) {
  }

  ngOnInit() {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      specialization: ['', Validators.required]
    });
    this.projectValues = ProjectValues;
  }

  onSubmit() {
    this.doctorForm.markAllAsTouched();
    if (this.doctorForm.invalid) {
      console.info(this.doctorForm.getRawValue())
      alert("Olhe no log console - F12");
      return;
    }
    // this._createMessage(this.messageForm.getRawValue(), this.contactItem);
  }

  onReset() {

  }

  return() {

  }
}


// export class DoctorComponent extends BaseResourceFormComponent<Doctor> {
//
//   constructor(protected medicalAppointmentsService: MedicalAppointmentsService, protected injector: Injector) {
//     // @ts-ignore
//     super(injector, new Doctor(), medicalAppointmentsService, Doctor.fromJson);
//   }
//
//   protected buildResourceForm() {
//     this.resourceForm = this.formBuilder.group({
//       id: [null],
//       name: [null, [Validators.required, Validators.minLength(2)]],
//       email: [null],
//       password: [null],
//       phoneNumber: [null],
//       specialization: [null],
//     });
//   }
//
//   protected creationPageTitle(): string {
//     return 'Cadastro de Médico';
//   }
//
//   protected editionPageTitle(): string {
//     // @ts-ignore
//     const doctorName = this.resource.name || '';
//     return 'Editando Médico: ' + doctorName;
//   }
//
// }



