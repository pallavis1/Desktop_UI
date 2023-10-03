import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  // public Editor = ClassicEditor;
  @ViewChild('iframe') iframe: ElementRef;

  constructor() { }

  ngOnInit() {

  }

    ngAfterViewInit(){
      const nativeEl = this.iframe.nativeElement;
      nativeEl.contentDocument
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
