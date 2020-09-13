import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExampleComponentComponent } from './form-example-component.component';

describe('FormExampleComponentComponent', () => {
  let component: FormExampleComponentComponent;
  let fixture: ComponentFixture<FormExampleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExampleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
