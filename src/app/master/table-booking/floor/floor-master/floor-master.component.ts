import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-floor-master',
  templateUrl: './floor-master.component.html',
  styleUrls: ['./floor-master.component.scss']
})
export class FloorMasterComponent implements OnInit {

  TRANSLATE: any = TRANSLATE['en'];
  constructor() { }

  ngOnInit() {
  }

}
