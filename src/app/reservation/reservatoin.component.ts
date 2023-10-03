import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { TRANSLATE } from '../shared/constant/translate';
import { MatTableDataSource } from '@angular/material/table';
// import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

interface Food {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  
})

export class ReservationComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  selectedValue: string;
  selectedCar: string;
  selected: Date | null;
  isHideWhenTableview = true;
  isTableView = true;
  isGuestView = false;
  closeBtn = false;
  expandViewBtn = true;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  items = [
    {
      productId: 446,
      mealName: "CASUAL",
    },
    {
      productId: 459,
      mealName: "test",
    },
    {
      productId: 461,
      mealName: "test",
    },
    {
      productId: 465,
      mealName: "test2212",
    },
  ];
  item =  469;

  
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // };
  constructor() {
    // var ll =  document.getElementsByClassName("mat-tab-header");
    $('#reservationTab li').click(function(){
      // alert();
    })
    // $(ll).hide();

    $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("data-bs-target") // activated tab
      // alert(target);
    });
  }
  ngDestroy(){
    // alert();
  }
  ngOnInit() {
  }
  
  showTableView() {
    this.isHideWhenTableview = !this.isHideWhenTableview;
    this.isTableView = true;
    this.isGuestView = false; 
    var ele =   document.getElementById("leftTab");
    if(!this.isHideWhenTableview === true){
      ele.classList.remove("hideShadow");
    }
    ele.classList.toggle("hideShadow");     
    document.getElementById("resrvLeft").style.display = 'block';
    
    var activetab = document.getElementById("pills-reservatioListn-tab");
    activetab.classList.remove("active");
    var activetab = document.getElementById("pills-reservationPanel-tab");
    activetab.classList.add("active");
    this.closeBtn = false;
    this.expandViewBtn = true;
    

  }
  showGuestView() {
    this.isTableView = false;
    this.isGuestView = true;
    
    var ele =   document.getElementById("leftTab");
    ele.classList.add("hideShadow"); 

  }

  expandView() {
    document.getElementById("pills-tabContent").style.display = 'none';
    this.closeBtn = true;
    this.expandViewBtn = false;
  }
  closeExpandView(){    
    document.getElementById("pills-tabContent").style.display = 'block';
    this.closeBtn = false;
    this.expandViewBtn = true;
  }

  showListExpandView(){
    document.getElementById("resrvLeft").style.display = 'none';
    this.closeBtn = true;
    this.expandViewBtn = false;
    var ele =   document.getElementById("resrvRight");
    ele.classList.add("rsrv_full_width"); 
    var ele =   document.getElementById("leftTab");
    ele.classList.add("hideShadow"); 
  }
  closeListExpandView(){
    document.getElementById("resrvLeft").style.display = 'block';
    this.closeBtn = false;
    this.expandViewBtn = true;
    var ele =   document.getElementById("resrvRight");
    ele.classList.remove("rsrv_full_width"); 
    var ele =   document.getElementById("leftTab");
    ele.classList.remove("hideShadow"); 
  }
  elementClicked = 'Click any of the list item below'

  tabClick(e){
    // alert();
    document.getElementById("resrvLeft").style.display = 'block';
    // var ele =   document.getElementById("leftTab");
    // ele.classList.add("hideShadow"); 
    var ele =   document.getElementById("resrvRight");
    ele.classList.remove("rsrv_full_width"); 
    // this.elementClicked = 'You clicked: ' + e.target.innerHTML;
  }

}


