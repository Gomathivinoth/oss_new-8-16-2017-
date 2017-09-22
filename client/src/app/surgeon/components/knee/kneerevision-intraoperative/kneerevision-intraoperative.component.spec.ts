import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneerevisionIntraoperativeComponent } from './kneerevision-intraoperative.component';

describe('KneerevisionIntraoperativeComponent', () => {
  let component: KneerevisionIntraoperativeComponent;
  let fixture: ComponentFixture<KneerevisionIntraoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneerevisionIntraoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneerevisionIntraoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
