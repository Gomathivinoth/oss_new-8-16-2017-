import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeComponent } from './knee.component';

describe('KneeComponent', () => {
  let component: KneeComponent;
  let fixture: ComponentFixture<KneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
