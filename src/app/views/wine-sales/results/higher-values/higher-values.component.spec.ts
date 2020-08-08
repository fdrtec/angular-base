import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherValuesComponent } from './higher-values.component';

describe('HigherValuesComponent', () => {
  let component: HigherValuesComponent;
  let fixture: ComponentFixture<HigherValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
