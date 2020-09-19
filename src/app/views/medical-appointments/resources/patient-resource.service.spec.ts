import { TestBed } from '@angular/core/testing';

import { PatientResourceService } from './patient-resource.service';

describe('PatientResourceService', () => {
  let service: PatientResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
