import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-flag-wise-guest-list',
  templateUrl: './flag-wise-guest-list.component.html',
  styleUrls: ['./flag-wise-guest-list.component.scss']
})
export class FlagWiseGuestListComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
