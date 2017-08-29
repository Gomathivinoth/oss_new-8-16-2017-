import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpineRevisionComponent } from './spine-revision.component';

describe('SpineRevisionComponent', () => {
  let component: SpineRevisionComponent;
  let fixture: ComponentFixture<SpineRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpineRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpineRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
