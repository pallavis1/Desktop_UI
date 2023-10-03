import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAndSMSConfigMasterComponent } from './email-and-sms-config-master.component';

describe('EmailAndSMSConfigMasterComponent', () => {
  let component: EmailAndSMSConfigMasterComponent;
  let fixture: ComponentFixture<EmailAndSMSConfigMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAndSMSConfigMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAndSMSConfigMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
