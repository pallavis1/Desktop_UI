import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationShowReportComponent } from './cancellation-show-report.component';

describe('CancellationShowReportComponent', () => {
  let component: CancellationShowReportComponent;
  let fixture: ComponentFixture<CancellationShowReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationShowReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationShowReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
