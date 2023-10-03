import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-channel-account-linkup-master',
  templateUrl: './channel-account-linkup-master.component.html',
  styleUrls: ['./channel-account-linkup-master.component.scss']
})
export class ChannelAccountLinkupMasterComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
