import {Injectable} from '@angular/core';
import {ClientResourceService} from './resources/client-resource.service';
import {Observable} from 'rxjs';
import {Client} from './models/client';
import {map} from 'rxjs/operators';
import {SaleResourceService} from './resources/sale-resource.service';
import {Sale} from './models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class WineSalesService {
  private clients: Client[];
  private sales: Sale[];

  private clientWithSales: any[];

  constructor(
    private clientResourceService: ClientResourceService,
    private saleResourceService: SaleResourceService
  ) {}

  prepareArtfacts(clients: Client[], sales: Sale[]): void {
    this.clients = clients;
    this.sales = sales;
  }

  getClients(): Observable<Client[]> {
    return this.clientResourceService.getAll();
  }

  getSales(): Observable<Sale[]> {
    return this.saleResourceService.getAll();
  }

  getHigherValues(): any[] {
    return this.sales.sort(this.sortByhighestValue)

    //tentativa para juntar os docs por cpf : muito processamento trava navegador
    // let highterValues: any[] = [];
    // this.sales.sort(this.sortByhighestValue)
    //   .map(sale => ({
    //     ...sale,
    //     ...this.clients.find(client => client.cpf.replace("-", ".") === sale.cliente )
    //   })).map((result) => highterValues.push(result))
    // return highterValues;

  }

  sortByhighestValue(a, b){
    return b.valorTotal - a.valorTotal;
  }

  getClientByCPF(cpf: string): string {
    return this.clients.find(
      (client) => client.cpf.replace("-", ".") === cpf).nome
  }
}
