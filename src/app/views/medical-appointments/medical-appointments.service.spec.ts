import { TestBed } from '@angular/core/testing';

import { MedicalAppointmentsService } from './medical-appointments.service';

describe('MedicalAppointmentsService', () => {
  let service: MedicalAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
