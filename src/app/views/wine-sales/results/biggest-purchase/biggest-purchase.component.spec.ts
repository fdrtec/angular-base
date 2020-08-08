import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestPurchaseComponent } from './biggest-purchase.component';

describe('BiggestPurchaseComponent', () => {
  let component: BiggestPurchaseComponent;
  let fixture: ComponentFixture<BiggestPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiggestPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggestPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
