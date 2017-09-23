import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiprevisionPostoperativescoreComponent } from './hiprevision-postoperativescore.component';

describe('HiprevisionPostoperativescoreComponent', () => {
  let component: HiprevisionPostoperativescoreComponent;
  let fixture: ComponentFixture<HiprevisionPostoperativescoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiprevisionPostoperativescoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiprevisionPostoperativescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
