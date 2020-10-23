import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramHtmlChallengeComponent } from './instagram-html-challenge.component';

describe('InstagramHtmlChallengeComponent', () => {
  let component: InstagramHtmlChallengeComponent;
  let fixture: ComponentFixture<InstagramHtmlChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramHtmlChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramHtmlChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
