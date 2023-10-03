import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestProfileReportComponent } from './guest-profile-report.component';

describe('GuestProfileReportComponent', () => {
  let component: GuestProfileReportComponent;
  let fixture: ComponentFixture<GuestProfileReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestProfileReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestProfileReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
