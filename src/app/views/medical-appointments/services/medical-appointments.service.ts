import {Injectable} from '@angular/core';
import {Doctor} from '../models/doctor';
import {DoctorResourceService} from '../resources/doctor-resource.service';
import {AppointmentResourceService} from '../resources/appointment-resource.service';
import {PatientResourceService} from '../resources/patient-resource.service';
import {Observable} from 'rxjs';
import {Patient} from '../models/patient';
import {Appointment} from '../models/appointment';

@Injectable({
  providedIn: 'root'
})

export class MedicalAppointmentsService {
  constructor(
    private doctorResourceService: DoctorResourceService,
    private patientResourceService: PatientResourceService,
    private appointmentResourceService: AppointmentResourceService
  ) {
  }

  getDoctors(): Observable<Doctor[]> {
    return this.doctorResourceService.getAll();
  }

  getDoctorById(id: string): Observable<Doctor> {
    return this.doctorResourceService.getById(id);
  }

  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.doctorResourceService.create(doctor);
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.doctorResourceService.update(doctor);
  }

  deleteDoctor(id: string): Observable<Doctor> {
    return this.doctorResourceService.delete(id);
  }

  getPatients(): Observable<Patient[]> {
    return this.patientResourceService.getAll();
  }

  getPatientById(id: string): Observable<Patient> {
    return this.patientResourceService.getById(id);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.patientResourceService.create(patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.patientResourceService.update(patient);
  }

  deletePatient(id: string): Observable<Patient> {
    return this.patientResourceService.delete(id);
  }

  getAppointments(): Observable<Appointment[]> {
    return this.appointmentResourceService.getAll();
  }

  getAppointmentById(id: string): Observable<Appointment> {
    return this.appointmentResourceService.getById(id);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.appointmentResourceService.create(appointment);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.appointmentResourceService.update(appointment);
  }

  deleteAppointment(id: string): Observable<Appointment> {
    return this.appointmentResourceService.delete(id);
  }
}
