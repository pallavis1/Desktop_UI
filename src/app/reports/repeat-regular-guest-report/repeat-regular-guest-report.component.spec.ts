import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatRegularGuestReportComponent } from './repeat-regular-guest-report.component';

describe('RepeatRegularGuestReportComponent', () => {
  let component: RepeatRegularGuestReportComponent;
  let fixture: ComponentFixture<RepeatRegularGuestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatRegularGuestReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatRegularGuestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
