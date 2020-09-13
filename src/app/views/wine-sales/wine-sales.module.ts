import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WineSalesComponent} from './wine-sales.component';
import {WineSalesRoutingModule} from './wine-sales-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {HigherValuesComponent} from './results/higher-values/higher-values.component';
import {BiggestPurchaseComponent} from './results/biggest-purchase/biggest-purchase.component';
import {MostLoyalCustomersComponent} from './results/most-loyal-customers/most-loyal-customers.component';
import {WineRecommendationComponent} from './results/wine-recommendation/wine-recommendation.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [ WineSalesComponent, HigherValuesComponent, BiggestPurchaseComponent, MostLoyalCustomersComponent, WineRecommendationComponent ],
  imports: [
    CommonModule,
    WineSalesRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WineSalesModule { }
