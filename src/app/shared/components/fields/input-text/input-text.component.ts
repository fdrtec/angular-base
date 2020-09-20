import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {FieldValidatorService} from '../field-validator.service';
import {SharedComponentValues} from '../../shared-component-values';

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
  sharedComponentValues;

  constructor(public fieldValidator: FieldValidatorService) {
    this.sharedComponentValues = SharedComponentValues;
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
