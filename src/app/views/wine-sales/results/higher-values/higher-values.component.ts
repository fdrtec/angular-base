import {Component, OnInit} from '@angular/core';
import {WineSalesService} from '../../wine-sales.service';
import {Client} from '../../models/client';

@Component({
  selector: 'app-higher-values',
  templateUrl: './higher-values.component.html',
  styleUrls: ['./higher-values.component.css']
})
export class HigherValuesComponent implements OnInit {
  panelOpenState: boolean;
  higherValues: any[];


  constructor(
    public wineSalesService: WineSalesService
  ) {
  }

  ngOnInit(): void {
  }
}
