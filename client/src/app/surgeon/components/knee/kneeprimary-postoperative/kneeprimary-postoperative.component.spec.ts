import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeprimaryPostoperativeComponent } from './kneeprimary-postoperative.component';

describe('KneeprimaryPostoperativeComponent', () => {
  let component: KneeprimaryPostoperativeComponent;
  let fixture: ComponentFixture<KneeprimaryPostoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeprimaryPostoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeprimaryPostoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
