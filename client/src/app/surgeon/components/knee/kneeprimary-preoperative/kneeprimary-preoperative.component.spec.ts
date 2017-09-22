import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeprimaryPreoperativeComponent } from './kneeprimary-preoperative.component';

describe('KneeprimaryPreoperativeComponent', () => {
  let component: KneeprimaryPreoperativeComponent;
  let fixture: ComponentFixture<KneeprimaryPreoperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeprimaryPreoperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeprimaryPreoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
