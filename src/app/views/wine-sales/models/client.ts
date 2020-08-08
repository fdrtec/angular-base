import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Client extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: string
  ) {
    super();
  }

  static fromJson(jsonData: any) {
    Object.assign(new Client(), jsonData);
  }
}
