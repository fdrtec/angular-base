import {Component, OnInit} from '@angular/core';
import {MedicalAppointmentsService} from './services/medical-appointments.service';

@Component({
  selector: 'app-medical-appointments',
  templateUrl: './medical-appointments.component.html',
  styleUrls: ['./medical-appointments.component.css']
})
export class MedicalAppointmentsComponent implements OnInit {

  constructor(private service: MedicalAppointmentsService) {
  }

  ngOnInit(): void {
  }

}
