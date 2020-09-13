import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from '../../../shared/services/base-resource.service';
import {Sale} from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleResourceService extends BaseResourceService<Sale>{
  constructor(protected injector: Injector) {
    super("http://www.mocky.io/v2/598b16861100004905515ec7", injector , Sale.fromJson);
  }
}
