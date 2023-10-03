import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelManagementListReportComponent } from './channel-management-list-report.component';

describe('ChannelManagementListReportComponent', () => {
  let component: ChannelManagementListReportComponent;
  let fixture: ComponentFixture<ChannelManagementListReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelManagementListReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelManagementListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
