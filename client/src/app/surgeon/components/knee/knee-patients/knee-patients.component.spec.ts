import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePatientsComponent } from './knee-patients.component';

describe('KneePatientsComponent', () => {
  let component: KneePatientsComponent;
  let fixture: ComponentFixture<KneePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
