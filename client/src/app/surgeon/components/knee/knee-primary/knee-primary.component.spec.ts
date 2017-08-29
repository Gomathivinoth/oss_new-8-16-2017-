import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePrimaryComponent } from './knee-primary.component';

describe('KneePrimaryComponent', () => {
  let component: KneePrimaryComponent;
  let fixture: ComponentFixture<KneePrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
