import {Component, OnInit} from '@angular/core';
import {WineSalesService} from '../../wine-sales.service';
import {Sale} from '../../models/sale.model';

@Component({
  selector: 'app-higher-values',
  templateUrl: './higher-values.component.html',
  styleUrls: ['./higher-values.component.css']
})
export class HigherValuesComponent implements OnInit {
  panelOpenState: boolean;
  higherValues: Sale[];


  constructor(
    public wineSalesService: WineSalesService
  ) {
  }

  ngOnInit(): void {
    this.wineSalesService.getHigherValues()
      .subscribe((data) => {
        console.table(data);
        this.higherValues = data;
      });
  }
}
