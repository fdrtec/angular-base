import {Injectable} from '@angular/core';
import {ClientResourceService} from './resources/client-resource.service';
import {forkJoin, Observable} from 'rxjs';
import {Client} from './models/client';
import {map} from 'rxjs/operators';
import {SaleResourceService} from './resources/sale-resource.service';
import {Sale} from './models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class WineSalesService {

  constructor(
    private clientResourceService: ClientResourceService,
    private saleResourceService: SaleResourceService
  ) {
  }


  getClients(): Observable<Client[]> {
    return this.clientResourceService.getAll();
  }

  getSales(): Observable<Sale[]> {
    return this.saleResourceService.getAll();
  }

  joinDocuments(sales: Sale[], clients: Client[]): Sale[] {
    return sales.sort(this.sortByhighestValue)
      .map(sale => {
        let client = clients.find(item => item.cpf.replace('-', '.') == sale.cliente);
        return {...sale, ['dadosCliente']: client};
      });
  }

  getHigherValues(): Observable<Sale[]> {
    return forkJoin(
      this.getClients(),
      this.getSales()
    ).pipe(map(([clients, sales]) =>
      this.joinDocuments(sales, clients)));
  }

  sortByhighestValue(a, b) {
    return b.valorTotal - a.valorTotal;
  }

  // getClientByCPF(cpf: string): string {
  //   return this.clients.find(
  //     (client) => client.cpf.replace('-', '.') === cpf).nome;
  // }
}
