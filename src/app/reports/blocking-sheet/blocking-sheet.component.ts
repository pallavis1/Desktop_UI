import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-blocking-sheet',
  templateUrl: './blocking-sheet.component.html',
  styleUrls: ['./blocking-sheet.component.scss']
})
export class BlockingSheetComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
