import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Doctor} from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorResourceService extends BaseResourceService<Doctor>{
  constructor(protected injector: Injector) {
    super("http://localhost:8080/doctor", injector, Doctor.fromJson);
  }
}
