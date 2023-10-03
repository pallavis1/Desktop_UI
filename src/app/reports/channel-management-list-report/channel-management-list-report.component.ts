import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-channel-management-list-report',
  templateUrl: './channel-management-list-report.component.html',
  styleUrls: ['./channel-management-list-report.component.scss']
})
export class ChannelManagementListReportComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
