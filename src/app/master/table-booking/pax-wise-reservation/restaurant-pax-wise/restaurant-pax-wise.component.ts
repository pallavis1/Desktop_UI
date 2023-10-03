import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-restaurant-pax-wise',
  templateUrl: './restaurant-pax-wise.component.html',
  styleUrls: ['./restaurant-pax-wise.component.scss']
})
export class RestaurantPaxWiseComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

}
