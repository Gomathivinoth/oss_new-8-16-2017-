import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneerevisionPostoperativeComponent } from './kneerevision-postoperative.component';

describe('KneerevisionPostoperativeComponent', () => {
  let component: KneerevisionPostoperativeComponent;
  let fixture: ComponentFixture<KneerevisionPostoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneerevisionPostoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneerevisionPostoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
