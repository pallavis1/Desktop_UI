import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-visit-status-criteria',
  templateUrl: './visit-status-criteria.component.html',
  styleUrls: ['./visit-status-criteria.component.scss']
})
export class VisitStatusCriteriaComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
