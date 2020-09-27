import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MedicalAppointmentsValues} from '../../../../../shared/constants/medical-appointments-values';
import {FormArtefactsValues} from '../../../../../shared/constants/form-artefacts-values';

@Component({
  selector: 'fdr-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patientForm: FormGroup;
  medicalAppointmentsValues = MedicalAppointmentsValues;
  formArtefactsValues = FormArtefactsValues;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.patientForm.markAllAsTouched();
    if (this.patientForm.invalid) {
      return;
    }
    alert(this.patientForm.getRawValue());
  }

  onReset() {

  }

  cancel() {

  }
}
