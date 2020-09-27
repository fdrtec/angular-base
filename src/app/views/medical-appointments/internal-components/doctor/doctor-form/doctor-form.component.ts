import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MedicalAppointmentsValues} from '../../../../../shared/constants/medical-appointments-values';
import {FormArtefactsValues} from '../../../../../shared/constants/form-artefacts-values';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {
  doctorForm: FormGroup;
  medicalAppointmentsValues = MedicalAppointmentsValues;
  formArtefactsValues = FormArtefactsValues;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      specialization: ['', Validators.required]
    });
  }

  onSubmit() {
    this.doctorForm.markAllAsTouched();
    if (this.doctorForm.invalid) {
      console.info(this.doctorForm.getRawValue());
      alert('Olhe no log console - F12');
      return;
    }
    // this._createMessage(this.messageForm.getRawValue(), this.contactItem);
  }

  onReset() {

  }

  cancel() {

  }
}
