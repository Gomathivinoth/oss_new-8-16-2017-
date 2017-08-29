import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipPrimaryComponent } from './hip-primary.component';

describe('HipPrimaryComponent', () => {
  let component: HipPrimaryComponent;
  let fixture: ComponentFixture<HipPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
