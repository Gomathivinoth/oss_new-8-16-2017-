import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipprimaryPostoperativescoreComponent } from './hipprimary-postoperativescore.component';

describe('HipprimaryPostoperativescoreComponent', () => {
  let component: HipprimaryPostoperativescoreComponent;
  let fixture: ComponentFixture<HipprimaryPostoperativescoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipprimaryPostoperativescoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipprimaryPostoperativescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
