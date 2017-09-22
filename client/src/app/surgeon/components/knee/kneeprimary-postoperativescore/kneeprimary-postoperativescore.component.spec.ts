import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeprimaryPostoperativescoreComponent } from './kneeprimary-postoperativescore.component';

describe('KneeprimaryPostoperativescoreComponent', () => {
  let component: KneeprimaryPostoperativescoreComponent;
  let fixture: ComponentFixture<KneeprimaryPostoperativescoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeprimaryPostoperativescoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeprimaryPostoperativescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
