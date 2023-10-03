import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from '../shared/constant/translate';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  TRANSLATE: any = TRANSLATE['en'];
  constructor() { }

  ngOnInit() {
  }

}
