import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BootcampEverisComponent } from './bootcamp-everis/bootcamp-everis.component';
import { InstagramHtmlChallengeComponent } from './bootcamp-everis/instagram-html-challenge/instagram-html-challenge.component';
import { NetflixInterfaceChallengeComponent } from './bootcamp-everis/netflix-interface-challenge/netflix-interface-challenge.component';

const routes: Routes = [
    {
        path: '', component: BootcampEverisComponent, children: [
            { path: 'instagram-challenge', component: InstagramHtmlChallengeComponent },
            { path: 'netflix-challenge', component: NetflixInterfaceChallengeComponent },
            // {path: 'patient', loadChildren: './internal-components/patient/patient.module#PatientModule'},
        ],
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DioRoutingModule {

}
