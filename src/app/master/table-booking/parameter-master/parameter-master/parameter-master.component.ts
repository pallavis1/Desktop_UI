import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-parameter-master',
  templateUrl: './parameter-master.component.html',
  styleUrls: ['./parameter-master.component.scss']
})
export class ParameterMasterComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
