import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipPatientsComponent } from './hip-patients.component';

describe('HipPatientsComponent', () => {
  let component: HipPatientsComponent;
  let fixture: ComponentFixture<HipPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
