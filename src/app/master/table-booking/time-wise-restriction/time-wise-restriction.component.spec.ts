import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWiseRestrictionComponent } from './time-wise-restriction.component';

describe('TimeWiseRestrictionComponent', () => {
  let component: TimeWiseRestrictionComponent;
  let fixture: ComponentFixture<TimeWiseRestrictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeWiseRestrictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeWiseRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
