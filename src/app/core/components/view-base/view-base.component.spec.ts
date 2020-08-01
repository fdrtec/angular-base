import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBaseComponent } from './view-base.component';

describe('ViewBaseComponent', () => {
  let component: ViewBaseComponent;
  let fixture: ComponentFixture<ViewBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
