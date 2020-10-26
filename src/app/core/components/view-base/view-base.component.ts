import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-view-base',
    templateUrl: './view-base.component.html',
    styleUrls: [ './view-base.component.css' ]
})
export class ViewBaseComponent implements OnInit, OnDestroy {

    mobileQuery: MediaQueryList;

    fillerNav = [
        { name: 'Home', route: '', icon: 'home' },
        { name: 'Agendamento de consultas', route: 'medical-appointments', icon: 'poll' },
        // {name: 'Informações', route: 'wine-sales-info', icon: 'poll'},
        {name: 'DIO', route: 'dio', icon: 'category'},
        { name: 'Framework', route: 'framework-info', icon: 'extension' },
        // { name: 'Sobre', route: 'about', icon: 'portrait' },
    ];
    shouldRun = true;
    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
