import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiprevisionPreoperativeComponent } from './hiprevision-preoperative.component';

describe('HiprevisionPreoperativeComponent', () => {
  let component: HiprevisionPreoperativeComponent;
  let fixture: ComponentFixture<HiprevisionPreoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiprevisionPreoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiprevisionPreoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
