import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-restaurant-setting',
  templateUrl: './restaurant-setting.component.html',
  styleUrls: ['./restaurant-setting.component.scss']
})
export class RestaurantSettingComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
