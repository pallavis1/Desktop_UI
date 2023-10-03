import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from '../../../../shared/constant/translate';

@Component({
  selector: 'app-bot-event-master',
  templateUrl: './bot-event-master.component.html',
  styleUrls: ['./bot-event-master.component.scss']
})
export class BOTEventMasterComponent implements OnInit {

  TRANSLATE: any = TRANSLATE['en'];
  
  constructor() { }

  ngOnInit() {
  }

}
