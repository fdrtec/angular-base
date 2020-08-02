import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Beer extends BaseResourceModel {
  constructor(
    public _id?: string,
    public type: string = 'Beer',
    public title?: string,
    public category?: string,
    public description?: string,
    public ingredients?: string
  ) {
    super();
  }
}
