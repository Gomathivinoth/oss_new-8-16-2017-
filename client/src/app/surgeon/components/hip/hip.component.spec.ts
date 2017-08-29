import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipComponent } from './hip.component';

describe('HipComponent', () => {
  let component: HipComponent;
  let fixture: ComponentFixture<HipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
