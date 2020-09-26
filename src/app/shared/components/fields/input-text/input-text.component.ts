import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {FieldValidatorService} from '../field-validator.service';
import {ValidatorMessageValues} from '../../../constants/validator-message-values';
import {ProjectValues} from '../../../constants/project-values';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() title: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  validatorMessageValues;
  projectValues = ProjectValues;

  constructor(public fieldValidator: FieldValidatorService) {
    this.validatorMessageValues = ValidatorMessageValues;
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
