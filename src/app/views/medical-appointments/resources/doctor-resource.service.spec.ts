import { TestBed } from '@angular/core/testing';

import { DoctorResourceService } from './doctor-resource.service';

describe('DoctorResourceService', () => {
  let service: DoctorResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
