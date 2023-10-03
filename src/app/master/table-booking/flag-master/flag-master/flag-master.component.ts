import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-flag-master',
  templateUrl: './flag-master.component.html',
  styleUrls: ['./flag-master.component.scss']
})
export class FlagMasterComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
