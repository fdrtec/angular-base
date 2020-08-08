import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLoyalCustomersComponent } from './most-loyal-customers.component';

describe('MostLoyalCustomersComponent', () => {
  let component: MostLoyalCustomersComponent;
  let fixture: ComponentFixture<MostLoyalCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostLoyalCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLoyalCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
