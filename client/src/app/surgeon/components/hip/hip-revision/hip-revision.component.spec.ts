import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipRevisionComponent } from './hip-revision.component';

describe('HipRevisionComponent', () => {
  let component: HipRevisionComponent;
  let fixture: ComponentFixture<HipRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
