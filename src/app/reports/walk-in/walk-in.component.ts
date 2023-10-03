import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-walk-in',
  templateUrl: './walk-in.component.html',
  styleUrls: ['./walk-in.component.scss']
})
export class WalkInComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
