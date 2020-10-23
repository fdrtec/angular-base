import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampEverisComponent } from './bootcamp-everis.component';

describe('BootcampEverisComponent', () => {
  let component: BootcampEverisComponent;
  let fixture: ComponentFixture<BootcampEverisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampEverisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampEverisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
