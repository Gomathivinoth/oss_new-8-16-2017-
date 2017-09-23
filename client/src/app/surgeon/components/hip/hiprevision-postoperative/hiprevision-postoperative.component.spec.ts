import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiprevisionPostoperativeComponent } from './hiprevision-postoperative.component';

describe('HiprevisionPostoperativeComponent', () => {
  let component: HiprevisionPostoperativeComponent;
  let fixture: ComponentFixture<HiprevisionPostoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiprevisionPostoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiprevisionPostoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
