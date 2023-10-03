import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-email-and-sms-config-master',
  templateUrl: './email-and-sms-config-master.component.html',
  styleUrls: ['./email-and-sms-config-master.component.scss']
})
export class EmailAndSMSConfigMasterComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
