import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSchedulerMasterListComponent } from './email-scheduler-master-list.component';

describe('EmailSchedulerMasterListComponent', () => {
  let component: EmailSchedulerMasterListComponent;
  let fixture: ComponentFixture<EmailSchedulerMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSchedulerMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSchedulerMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
