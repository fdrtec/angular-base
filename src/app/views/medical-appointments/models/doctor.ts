import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Doctor extends BaseResourceModel {
  constructor(
    private _id?: string,
    private name?: string,
    private email?: string,
    private password?: string,
    private phoneNumber?: string,
    private specialization?: string
  ) {
    super();
  }

  static fromJson(jsonData: any) {
    return Object.assign(new Doctor(), jsonData);
  }
}
