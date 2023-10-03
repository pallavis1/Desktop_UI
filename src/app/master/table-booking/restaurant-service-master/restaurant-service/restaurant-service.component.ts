import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';
import {MatTableDataSource } from '@angular/material/table';
import { WebService } from "../../../../shared/services/web.service";



@Component({
  selector: 'app-restaurant-service',
  templateUrl: './restaurant-service.component.html',
  styleUrls: ['./restaurant-service.component.scss']
})
export class RestaurantServiceComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
    
  display = "none";
  displayedColumns: string[] = ['accountName', 'email', 'contact', 'accountId', 'active',"arrow"];
  dataSource = new MatTableDataSource<PeriodicElement>();
  storedTheme:string = localStorage.getItem('themeColor')
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  constructor(private API: WebService,) {
    
  }
  
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  helpModal(helpModal){
    this.display = 'block';
    
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
