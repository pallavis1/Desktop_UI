import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-block-time-slots',
  templateUrl: './block-time-slots.component.html',
  styleUrls: ['./block-time-slots.component.scss']
})
export class BlockTimeSlotsComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
