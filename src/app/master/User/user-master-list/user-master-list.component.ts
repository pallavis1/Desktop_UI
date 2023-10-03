import { Component, OnInit, ViewChild, AfterViewInit, enableProdMode } from '@angular/core';
import { MatPaginator } from '@angular/material';
import {MatTableDataSource } from '@angular/material/table';
import { CustomPaginator } from '../../../common/Pagination/customPaginator';
import { MatPaginatorIntl } from '@angular/material';
import { CommonService } from '../../../shared/services/common.service';
import { WebService } from "../../../shared/services/web.service";
import { TRANSLATE } from '../../../shared/constant/translate';



@Component({
  selector: 'app-user-master-list',
  templateUrl: './user-master-list.component.html',
  styleUrls: ['./user-master-list.component.scss']
})
export class UserMasterListComponent implements OnInit {
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
    console.log( this.dataSource.paginator)
    this.getTableData()
    this.storedTheme =  localStorage.getItem('themeColor')
  }
  ngDoCheck() {
    const themeColor = localStorage.getItem('themeColor');
    if (themeColor !== this.storedTheme) {
      this.storedTheme = themeColor;
    }
  }

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
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


