import {BaseResourceModel} from '../../../shared/models/base-resource.model';
import {Sale} from './sale.model';

export class Client extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: string,
    public sales?: Sale[]
  ) {
    super();
  }

  static fromJson(jsonData: any) {
    return Object.assign(new Client(), jsonData);
  }
}
