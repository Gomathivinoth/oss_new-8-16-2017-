import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneerevisionPostoperativescoreComponent } from './kneerevision-postoperativescore.component';

describe('KneerevisionPostoperativescoreComponent', () => {
  let component: KneerevisionPostoperativescoreComponent;
  let fixture: ComponentFixture<KneerevisionPostoperativescoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneerevisionPostoperativescoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneerevisionPostoperativescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
