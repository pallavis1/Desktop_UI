import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';

@Component({
  selector: 'app-guest-master',
  templateUrl: './guest-master.component.html',
  styleUrls: ['./guest-master.component.scss'],
  styles:[
    `.modal{background: rgba(0,0,0, .5);`
  ]
})
export class GuestMasterComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  display = "none";

  constructor() { }

  ngOnInit() {
    
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
