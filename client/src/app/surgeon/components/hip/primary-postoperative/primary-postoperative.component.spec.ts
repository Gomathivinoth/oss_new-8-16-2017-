import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryPostoperativeComponent } from './primary-postoperative.component';

describe('PrimaryPostoperativeComponent', () => {
  let component: PrimaryPostoperativeComponent;
  let fixture: ComponentFixture<PrimaryPostoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryPostoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryPostoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
