import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wine-sales',
  templateUrl: './wine-sales.component.html',
  styleUrls: ['./wine-sales.component.css']
})
export class WineSalesComponent implements OnInit {
  background: string = "white"
  activeLink: any;
  links: any[] = [
    {
      title: 'Compras de maiores valores',
      route: 'a'
    },
    {
      title: 'Maior compra única (2016)',
      route: 'b'
    },
    {
      title: 'Clientes mais fiéis',
      route: 'c'
    },
    {
      title: 'Recomendação de vinho',
      route: 'd'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
