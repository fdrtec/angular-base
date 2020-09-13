import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WineSalesComponent} from './wine-sales.component';
import {HigherValuesComponent} from './results/higher-values/higher-values.component';
import {BiggestPurchaseComponent} from './results/biggest-purchase/biggest-purchase.component';
import {MostLoyalCustomersComponent} from './results/most-loyal-customers/most-loyal-customers.component';
import {WineRecommendationComponent} from './results/wine-recommendation/wine-recommendation.component';

const routes: Routes = [
  {
    path: '', component: WineSalesComponent, children: [
      { path: 'higher-values', component: HigherValuesComponent},
      { path: 'biggest-purchase', component: BiggestPurchaseComponent},
      { path: 'most-loyal-customers', component: MostLoyalCustomersComponent},
      { path: 'wine-recommendation', component: WineRecommendationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class WineSalesRoutingModule {
}
