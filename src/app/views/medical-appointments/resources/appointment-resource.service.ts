import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Appointment} from '../models/appointment';

@Injectable({
  providedIn: 'root'
})

export class AppointmentResourceService extends BaseResourceService<Appointment>{
  constructor(protected injector: Injector) {
    super('http://localhost:8080/appointment', injector, Appointment.fromJson);
  }
}
