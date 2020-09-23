import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';
import {Doctor} from '../../../models/doctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

   doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    let doctor = new Doctor("", "Marcelo", "marcelo@doctor.com", "abcd", "99999999", "otorrino");
    this.doctors.push(doctor);
  }
}
