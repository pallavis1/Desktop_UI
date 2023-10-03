import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitStatusCriteriaListComponent } from './visit-status-criteria-list.component';

describe('VisitStatusCriteriaListComponent', () => {
  let component: VisitStatusCriteriaListComponent;
  let fixture: ComponentFixture<VisitStatusCriteriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitStatusCriteriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitStatusCriteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
