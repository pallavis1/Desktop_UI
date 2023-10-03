import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-cancellation-show-report',
  templateUrl: './cancellation-show-report.component.html',
  styleUrls: ['./cancellation-show-report.component.scss']
})
export class CancellationShowReportComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
