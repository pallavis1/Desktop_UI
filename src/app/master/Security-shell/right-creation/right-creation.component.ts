import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-right-creation',
  templateUrl: './right-creation.component.html',
  styleUrls: ['./right-creation.component.scss']
})
export class RightCreationComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
