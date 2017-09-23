import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiprevisionIntraoperativeComponent } from './hiprevision-intraoperative.component';

describe('HiprevisionIntraoperativeComponent', () => {
  let component: HiprevisionIntraoperativeComponent;
  let fixture: ComponentFixture<HiprevisionIntraoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiprevisionIntraoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiprevisionIntraoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
