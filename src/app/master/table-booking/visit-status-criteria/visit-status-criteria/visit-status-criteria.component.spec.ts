import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitStatusCriteriaComponent } from './visit-status-criteria.component';

describe('VisitStatusCriteriaComponent', () => {
  let component: VisitStatusCriteriaComponent;
  let fixture: ComponentFixture<VisitStatusCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitStatusCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitStatusCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
