import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipprimaryPostoperativeComponent } from './hipprimary-postoperative.component';

describe('HipprimaryPostoperativeComponent', () => {
  let component: HipprimaryPostoperativeComponent;
  let fixture: ComponentFixture<HipprimaryPostoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipprimaryPostoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipprimaryPostoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
