import {BaseResourceModel} from '../../../shared/models/base-resource.model';
import {Patient} from './patient';
import {Doctor} from './doctor';

export class Appointment extends BaseResourceModel {
  constructor(
    private _id?: string,
    private date?: Date,
    private patient?: Patient,
    private doctor?: Doctor,
  ) {
    super();
  }

  static fromJson(jsonData: any) {
    return Object.assign(new Doctor(), jsonData);
  }
}
