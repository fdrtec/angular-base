import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fdr-bootcamp-everis',
  templateUrl: './bootcamp-everis.component.html',
  styleUrls: ['./bootcamp-everis.component.css']
})
export class BootcampEverisComponent implements OnInit {
  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
