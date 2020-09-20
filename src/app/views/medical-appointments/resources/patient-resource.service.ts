import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Patient} from '../models/patient';

@Injectable({
  providedIn: 'root'
})

export class PatientResourceService extends BaseResourceService<Patient> {
  constructor(protected injector: Injector) {
    super('http://localhost:8080/patient', injector, Patient.fromJson);
  }
}
