import {Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {FieldValidatorService} from '../field-validator.service';
import {ValidatorMessageValues} from '../../../constants/validator-message-values';

@Component({
  selector: 'fdr-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() title: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  validatorMessageValues;

  constructor(public fieldValidator: FieldValidatorService) {
    this.validatorMessageValues = ValidatorMessageValues;
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
