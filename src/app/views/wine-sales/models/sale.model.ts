import {BaseResourceModel} from '../../../shared/models/base-resource.model';
import {Item} from './item.model';

export class Sale extends BaseResourceModel {
  constructor(
    public codigo?: string,
    public data?: Date,
    public cliente?: string,
    public itens?: Item[],
    public valorTotal?: number
  ) {
    super();
  }

  static fromJson(jsonData:any){
    return Object.assign(new Sale, jsonData);
  }
}
