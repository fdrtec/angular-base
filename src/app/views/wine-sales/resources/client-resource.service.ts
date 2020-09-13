import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientResourceService extends BaseResourceService<Client>{

  constructor(protected  injector: Injector) {
    super("http://www.mocky.io/v2/598b16291100004705515ec5", injector, Client.fromJson);
  }
}
