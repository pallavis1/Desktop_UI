import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-rating-report',
  templateUrl: './rating-report.component.html',
  styleUrls: ['./rating-report.component.scss']
})
export class RatingReportComponent implements OnInit {
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
