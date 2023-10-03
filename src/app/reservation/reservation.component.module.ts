import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SearchDropdown } from '../common/search-dropdown/search-dropdown';
import { ReservationComponent } from './reservatoin.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ReservationComponent, SearchDropdown],
  bootstrap:    [ ReservationComponent ]
})
export class AppModule { }
