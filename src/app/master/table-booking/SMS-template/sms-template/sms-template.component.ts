import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-sms-template',
  templateUrl: './sms-template.component.html',
  styleUrls: ['./sms-template.component.scss']
})
export class SmsTemplateComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  // public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

  result: string = "";
  // set default color option
  options:any = {
    "background-color": "#454545",
    "color": "#ffffff",
    "border": "2px solid #454545",
    "display":"flex",
    "align-items":"center",
  }
  update(elem:string) {
    this.result = elem;
  }
}
