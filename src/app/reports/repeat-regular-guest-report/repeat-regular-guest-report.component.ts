import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-repeat-regular-guest-report',
  templateUrl: './repeat-regular-guest-report.component.html',
  styleUrls: ['./repeat-regular-guest-report.component.scss']
})
export class RepeatRegularGuestReportComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
