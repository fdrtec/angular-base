import {Component, OnInit} from '@angular/core';
import {Client} from './models/client';
import {Sale} from './models/sale.model';
import {WineSalesService} from './wine-sales.service';
import {flatMap, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-wine-sales',
  templateUrl: './wine-sales.component.html',
  styleUrls: ['./wine-sales.component.css']
})
export class WineSalesComponent implements OnInit {
  background: string = 'white';
  activeLink: any;
  links: any[] = [
    {
      title: 'Compras de maiores valores',
      route: '/wine-sales-info/higher-values'
    },
    {
      title: 'Maior compra única (2016)',
      route: '/wine-sales-info/biggest-purchase'
    },
    {
      title: 'Clientes mais fiéis',
      route: '/wine-sales-info/most-loyal-customers'
    },
    {
      title: 'Recomendação de vinho',
      route: '/wine-sales-info/wine-recommendation'
    }
  ];
  clients: Client[];
  sales: Sale[];
  clientWithSales: any[];

  constructor(private wineSalesService: WineSalesService) {
  }

  ngOnInit(): void {
    this.wineSalesService.getHigherValues();

    // this.wineSalesService.getSales()
    //   .pipe(
    //     flatMap((sales) => this.sales = sales))
    //   .subscribe(() => this.wineSalesService.getClients()
    //      .pipe(map((clients) => this.clients = clients))
    //  .subscribe(() => this.wineSalesService.prepareArtfacts(this.clients, this.sales)))

    // this.wineSalesService.getSales()
    //   .subscribe((sales) => this.sales = sales);

    // this.wineSalesService.getClients()
    //     .pipe(map((clients) => this.clients = clients))
    //     .subscribe(() => this.wineSalesService.prepareArtfacts(this.clients, this.sales))
    //
    // this.wineSalesService.getSales()
    //   .subscribe((sales) => this.sales = sales);

    // this.wineSalesService.getClients()
    //   .pipe(map((clients) => this.wineSalesService.getSales()
    //     .subscribe((sales) => sales.map(sale => ({
    //       ...sale,
    //       ...clients.find(client => client.cpf
    //         .replace('-', '.') === sale.cliente)
    //     })))))
    //   .subscribe(() => this.wineSalesService.prepareArtfacts(this.clients, this.sales));
  }
}
