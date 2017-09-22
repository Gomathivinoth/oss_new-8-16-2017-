import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneerevisionRadiologyComponent } from './kneerevision-radiology.component';

describe('KneerevisionRadiologyComponent', () => {
  let component: KneerevisionRadiologyComponent;
  let fixture: ComponentFixture<KneerevisionRadiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneerevisionRadiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneerevisionRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
