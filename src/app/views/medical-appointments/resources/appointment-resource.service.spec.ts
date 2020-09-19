import { TestBed } from '@angular/core/testing';

import { AppointmentResourceService } from './appointment-resource.service';

describe('AppointmentResourceService', () => {
  let service: AppointmentResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
