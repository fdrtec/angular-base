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
    let doctor1 = new Doctor("123456", "Marcelo Medeiros", "marcelo@doctor.com", "abcd", "99999999", "Otorrino");
    let doctor2 = new Doctor("589743", "João Silveira", "joao@doctor.com", "abcd", "888888", "Clínico Geral");
    this.doctors.push(doctor1, doctor2);
  }

  createDoctor() {


  }

  updateDoctor(_id: String) {
    confirm("update id:"+_id);
  }

  deleteDoctor(_id: any) {
    confirm("delete id:"+_id);

  }


}
