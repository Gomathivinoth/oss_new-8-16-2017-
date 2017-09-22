import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeprimaryIntraoperativeComponent } from './kneeprimary-intraoperative.component';

describe('KneeprimaryIntraoperativeComponent', () => {
  let component: KneeprimaryIntraoperativeComponent;
  let fixture: ComponentFixture<KneeprimaryIntraoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeprimaryIntraoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeprimaryIntraoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
