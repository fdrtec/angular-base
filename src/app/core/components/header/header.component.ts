import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {name: 'home', route:'', icon:'home'},
    {name: 'framework', route:'framework-info', icon:'extension'},
  ]

  fillerContent = Array.from({length: 10}, () =>
    `Mock test: Example of context.`);

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

  shouldRun = true;


}
