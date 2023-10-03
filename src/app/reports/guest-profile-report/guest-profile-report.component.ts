import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-guest-profile-report',
  templateUrl: './guest-profile-report.component.html',
  styleUrls: ['./guest-profile-report.component.scss']
})
export class GuestProfileReportComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  showReportView = false;
  constructor() { }

  ngOnInit() {
  }

  showReportTbl() {
    this.showReportView = true;
  }
  CloseReportView(){
    this.showReportView = false;
  }
}
