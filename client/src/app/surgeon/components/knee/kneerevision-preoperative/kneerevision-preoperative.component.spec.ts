import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneerevisionPreoperativeComponent } from './kneerevision-preoperative.component';

describe('KneerevisionPreoperativeComponent', () => {
  let component: KneerevisionPreoperativeComponent;
  let fixture: ComponentFixture<KneerevisionPreoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneerevisionPreoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneerevisionPreoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
