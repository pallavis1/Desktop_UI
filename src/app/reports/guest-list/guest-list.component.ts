import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
