import {NgModule} from '@angular/core';
import {ViewsModule} from '../views/views.module';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ViewBaseComponent} from './components/view-base/view-base.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDatabase} from '../in-memory-database';

@NgModule({
  imports: [
    ViewsModule,
    MaterialDesignModule,
    RouterModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  declarations: [
    ViewBaseComponent
  ],
  exports: [
    ViewBaseComponent,
    MaterialDesignModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
})
export class CoreModule {
}
