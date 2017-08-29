import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinePrimaryComponent } from './spine-primary.component';

describe('SpinePrimaryComponent', () => {
  let component: SpinePrimaryComponent;
  let fixture: ComponentFixture<SpinePrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinePrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
