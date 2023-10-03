import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-restaurant-master',
  templateUrl: './restaurant-master.component.html',
  styleUrls: ['./restaurant-master.component.scss'],
})
export class RestaurantMasterComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];

  constructor() { }

  ngOnInit() {
  }

 
}
