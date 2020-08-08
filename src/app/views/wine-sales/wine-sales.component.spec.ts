import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineSalesComponent } from './wine-sales.component';

describe('WineSalesComponent', () => {
  let component: WineSalesComponent;
  let fixture: ComponentFixture<WineSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
