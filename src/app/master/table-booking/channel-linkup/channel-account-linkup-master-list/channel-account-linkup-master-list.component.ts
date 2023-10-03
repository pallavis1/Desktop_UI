import { Component, OnInit } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';
import { WebService } from "../../../../shared/services/web.service";
import { TRANSLATE } from '../../../../shared/constant/translate';

@Component({
  selector: 'app-channel-account-linkup-master-list',
  templateUrl: './channel-account-linkup-master-list.component.html',
  styleUrls: ['./channel-account-linkup-master-list.component.scss']
})
export class ChannelAccountLinkupMasterListComponent implements OnInit {
  displayedColumns: string[] = ['accountName', 'email', 'contact', 'accountId', 'active',"arrow"];

  dataSource = new MatTableDataSource<PeriodicElement>();
  storedTheme:string = localStorage.getItem('themeColor')
  TRANSLATE: any = TRANSLATE['en'];
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  constructor(private API: WebService,) {
    
  }
  getTableData(){
    try{
      this.API.FakeApiCalling('cd7ce6e6-4c04-4607-9ee3-ef1354083009', {}, 'GET',"fakeUrl" )
      .subscribe(
        data => {
          if (data.status) {
            this.dataSource = new MatTableDataSource<PeriodicElement>(data.data);
          } 
        },
        error => {
          console.log(error)
          alert('get Error!!!')
        },
      );
    }catch(error){
      console.log(error)
    }
  }

  ngOnInit() {
    this.getTableData()
    this.storedTheme =  localStorage.getItem('themeColor')
  }
  ngDoCheck() {
    const themeColor = localStorage.getItem('themeColor');
    if (themeColor !== this.storedTheme) {
      this.storedTheme = themeColor;
    }
  }

  


}

export const environment = {
  production: true
};

export interface PeriodicElement {
  accountId: number;
  accountName: string;
  active: string;
  email: string;
  contact: number;
}

