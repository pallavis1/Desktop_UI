import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-whatsapp-master-template',
  templateUrl: './whatsapp-master-template.component.html',
  styleUrls: ['./whatsapp-master-template.component.scss']
})
export class WhatsappMasterTemplateComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }

  ngOnInit() {
  }

}
