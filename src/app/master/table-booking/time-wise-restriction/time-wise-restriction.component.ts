import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-time-wise-restriction',
  templateUrl: './time-wise-restriction.component.html',
  styleUrls: ['./time-wise-restriction.component.scss']
})
export class TimeWiseRestrictionComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
