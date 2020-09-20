import {NgModule} from '@angular/core';
import {ViewBaseComponent} from './components/view-base/view-base.component';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  declarations: [
    ViewBaseComponent
  ],

  imports: [
    //BrowserModule,
    CoreRoutingModule,
    // MaterialDesignModule,
    // RouterModule,
    // FlexLayoutModule,
    // BrowserAnimationsModule,
    // HttpClientModule
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: [
    ViewBaseComponent,
    //MaterialDesignModule,
    //ViewBaseComponent,
    //FlexLayoutModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    //HttpClientModule,
    //CoreRoutingModule
  ],
})
export class CoreModule {
}
