import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryRadiologyComponent } from './primary-radiology.component';

describe('PrimaryRadiologyComponent', () => {
  let component: PrimaryRadiologyComponent;
  let fixture: ComponentFixture<PrimaryRadiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryRadiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
