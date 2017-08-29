import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeRevisionComponent } from './knee-revision.component';

describe('KneeRevisionComponent', () => {
  let component: KneeRevisionComponent;
  let fixture: ComponentFixture<KneeRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
