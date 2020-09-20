import { TestBed } from '@angular/core/testing';

import { FieldValidatorService } from './field-validator.service';

describe('FieldValidatorService', () => {
  let service: FieldValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
