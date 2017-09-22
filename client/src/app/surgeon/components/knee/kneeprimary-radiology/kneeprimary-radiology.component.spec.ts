import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeprimaryRadiologyComponent } from './kneeprimary-radiology.component';

describe('KneeprimaryRadiologyComponent', () => {
  let component: KneeprimaryRadiologyComponent;
  let fixture: ComponentFixture<KneeprimaryRadiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeprimaryRadiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeprimaryRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
