import {BaseResourceModel} from '../../models/base-resource.model';
import {AfterContentChecked, Injector, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseResourceService} from '../../services/base-resource.service';

export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessage: string[] = null;
  submittingForm: boolean = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }


  ngOnInit(): void {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked(): void {
    this.setTitlePage();
  }

  submitForm() {
    this.submittingForm = true;
    if(this.currentAction == 'new') this.createResource();
    else this.updateResource();
  }

  protected setCurrentAction() {
  }

  protected buildResourceForm() {
  }

  protected loadResource() {
  }

  protected setTitlePage() {
  }

  protected createResource() {
  }

  protected updateResource() {
  }
}
