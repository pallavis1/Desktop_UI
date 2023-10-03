import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSchedulerMasterComponent } from './email-scheduler-master.component';

describe('EmailSchedulerMasterComponent', () => {
  let component: EmailSchedulerMasterComponent;
  let fixture: ComponentFixture<EmailSchedulerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSchedulerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSchedulerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
