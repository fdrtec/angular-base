import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Patient extends BaseResourceModel {
  constructor(
    private _id?: string,
    private name?: string,
    private email?: string,
    private password?: string,
    private phoneNumber?: string,
    private credit?: Boolean
  ) {
    super();
  }

  static fromJson(jsonData: any) {
    return Object.assign(new Patient(), jsonData);
  }
}
