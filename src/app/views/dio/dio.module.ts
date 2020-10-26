import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampEverisComponent } from './bootcamp-everis/bootcamp-everis.component';
import { InstagramHtmlChallengeComponent } from './bootcamp-everis/instagram-html-challenge/instagram-html-challenge.component';
import { DioRoutingModule } from './dio--routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [
        BootcampEverisComponent,
        InstagramHtmlChallengeComponent,
    ],
    imports: [
        CommonModule,
        DioRoutingModule,
        SharedModule
    ],
    exports: [
        SharedModule
    ],
    providers: []
})
export class DioModule {
}
