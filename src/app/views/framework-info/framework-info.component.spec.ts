import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkInfoComponent } from './framework-info.component';

describe('FrameworkInfoComponent', () => {
  let component: FrameworkInfoComponent;
  let fixture: ComponentFixture<FrameworkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
