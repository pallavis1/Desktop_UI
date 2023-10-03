import { Component, OnInit, ViewChild, AfterViewInit, enableProdMode } from '@angular/core';
import { MatPaginator } from '@angular/material';
import {MatTableDataSource } from '@angular/material/table';
import { CustomPaginator } from '../common/Pagination/customPaginator';
import { MatPaginatorIntl } from '@angular/material';
import { CommonService } from '../shared/services/common.service';
import { WebService } from "../shared/services/web.service";

@Component({
  selector: 'app-account-selection',
  templateUrl: './account-selection.component.html',
  styleUrls: ['./account-selection.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ]
})
export class AccountSelectionComponent implements OnInit {
  displayedColumns: string[] = ['accountName', 'email', 'contact', 'accountId', 'active',"arrow"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  storedTheme:string = localStorage.getItem('themeColor')
 
  constructor(private API: WebService,) {
    
  }
  getTableData(){

    try{
      this.API.FakeApiCalling('cd7ce6e6-4c04-4607-9ee3-ef1354083009', {}, 'GET',"fakeUrl" )
      .subscribe(
        data => {
          if (data.status) {
            this.dataSource = new MatTableDataSource<PeriodicElement>(data.data);
            this.dataSource.paginator = this.paginator;
            console.log( this.dataSource.paginator)
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
    this.dataSource.paginator = this.paginator;
  }
  filterByAccountName(accountName: string) {
    if (accountName) {
      const filteredData = ELEMENT_DATA.filter(
        (element) => element.accountName.toLowerCase().includes(accountName.toLowerCase())
      );
      this.dataSource = new MatTableDataSource<PeriodicElement>(filteredData);
      this.dataSource.paginator = this.paginator;
    } else {
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }
  }

  filterByAccountID(accountId: string) {
    if (accountId) {
      const filteredData = ELEMENT_DATA.filter(
        (element) => element.accountId === +accountId
      );
      this.dataSource = new MatTableDataSource<PeriodicElement>(filteredData);
      this.dataSource.paginator = this.paginator;
    } else {
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
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

const ELEMENT_DATA: PeriodicElement[] =  [{"accountId":1,"accountName":"Example1","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":2,"accountName":"Example12","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":3,"accountName":"Example13","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":4,"accountName":"Example14","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":5,"accountName":"Example15","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":6,"accountName":"Example16","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":7,"accountName":"Example7","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":8,"accountName":"Example01","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":9,"accountName":"Example125","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":10,"accountName":"Example157","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":11,"accountName":"Example187","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":12,"accountName":"Example1654","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":13,"accountName":"Example541","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":14,"accountName":"Example6541","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":15,"accountName":"Examplzcxze1","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":16,"accountName":"Example1654","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":17,"accountName":"Exampsdfdsfle1","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":18,"accountName":"Exasdfample1","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":18,"accountName":"Examsdfple1","email":"abcd@gmail.com","active":"yes","contact":56654654648},{"accountId":20,"accountName":"Exam645ple1","email":"abcd@gmail.com","active":"yes","contact":56654654648}];

