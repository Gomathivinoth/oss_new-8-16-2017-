import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinePatientsComponent } from './spine-patients.component';

describe('SpinePatientsComponent', () => {
  let component: SpinePatientsComponent;
  let fixture: ComponentFixture<SpinePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
