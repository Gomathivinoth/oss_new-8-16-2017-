import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipprimaryRadiologyComponent } from './hipprimary-radiology.component';

describe('HipprimaryRadiologyComponent', () => {
  let component: HipprimaryRadiologyComponent;
  let fixture: ComponentFixture<HipprimaryRadiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipprimaryRadiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipprimaryRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
