import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipprimaryIntraoperativeComponent } from './hipprimary-intraoperative.component';

describe('HipprimaryIntraoperativeComponent', () => {
  let component: HipprimaryIntraoperativeComponent;
  let fixture: ComponentFixture<HipprimaryIntraoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipprimaryIntraoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipprimaryIntraoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
