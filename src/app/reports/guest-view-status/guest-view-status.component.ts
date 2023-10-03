import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-guest-view-status',
  templateUrl: './guest-view-status.component.html',
  styleUrls: ['./guest-view-status.component.scss']
})
export class GuestViewStatusComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
