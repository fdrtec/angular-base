import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentsComponent } from './medical-appointments.component';

describe('MedicalAppointmentsComponent', () => {
  let component: MedicalAppointmentsComponent;
  let fixture: ComponentFixture<MedicalAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
