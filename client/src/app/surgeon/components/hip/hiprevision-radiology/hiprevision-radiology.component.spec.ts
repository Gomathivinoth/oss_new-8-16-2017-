import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiprevisionRadiologyComponent } from './hiprevision-radiology.component';

describe('HiprevisionRadiologyComponent', () => {
  let component: HiprevisionRadiologyComponent;
  let fixture: ComponentFixture<HiprevisionRadiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiprevisionRadiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiprevisionRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
