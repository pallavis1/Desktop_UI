import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAndSMSConfigMasterListComponent } from './email-and-sms-config-master-list.component';

describe('EmailAndSMSConfigMasterListComponent', () => {
  let component: EmailAndSMSConfigMasterListComponent;
  let fixture: ComponentFixture<EmailAndSMSConfigMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAndSMSConfigMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAndSMSConfigMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
