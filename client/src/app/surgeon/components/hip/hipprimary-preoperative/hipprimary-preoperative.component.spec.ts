import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipprimaryPreoperativeComponent } from './hipprimary-preoperative.component';

describe('HipprimaryPreoperativeComponent', () => {
  let component: HipprimaryPreoperativeComponent;
  let fixture: ComponentFixture<HipprimaryPreoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipprimaryPreoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipprimaryPreoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
