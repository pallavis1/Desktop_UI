import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Router, NavigationStart  } from '@angular/router';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';

interface FoodNode {
  name: string;
  url: string;
  icon: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Configuration',
    url: '',
    icon: "settings",
    children: [
      {
        name: 'Account',
        url: '',
        icon: "home",
        children: [
          {
            name: "Account Master",
            url: "/#/account-master-list",
            icon: "manage_accounts",
          },
          {
            name: "Role Master",
            url: "/#/role-master-list",
            icon: "accessibility",
          },
          {
            name: "User Master",
            url: "/#/user-master-list",
            icon: "supervised_user_circle",
          },
          {
            name: "Security Master",
            url: '/#/right-list',
            icon: "system_security_update_good",
          },
        ],
      },
      {
        name: 'Restaurant',
        url: '',
        icon: "hotel_class",
        children: [
          {
            name: 'Outlet Details',
            url: '/#/restaurant-master-list',
            icon: "drive_file_rename_outline",
          },
        ] ,
      },
    ],
  },
  {
    name: 'Table Booking',
    url: '',
    icon: "table",
    children: [
      {
        name: 'Account',
        url: '',
        icon: "table",
        children: [
          {
            name: "Company Master",
            url: "/#/companyMasterList",
            icon: "",
          },
          {
            name: "General Master",
            url: "/#/BOTGeneralMaster",
            icon: "",
          },
          {
            name: "Occasion Master",
            url: "/#/BOTEventMasterList",
            icon: "",
          },
          {
            name: "Guest Master",
            url: "/#/guestMasterList",
            icon: "",
          },
          {
            name: "Flag Master",
            url: "/#/flagMasterList",
            icon: "",
          },
          {
            name: "Channel Linkup",
            url: "/#/channelAccountLinkupList",
            icon: "",
          },
          
        ]
      },
      {
        name: 'Restaurant',
        url: '',
        icon: "table",
        children: [
          {
            name: "Floor",
            url: "/#/floorMasterList",
            icon: "",
          },
          {
            name: "Restaurant Service Master",
            url: "/#/restaurantServiceList",
            icon: "",
          },
          {
            name: "Table",
            url: "/#/tableMasterList",
            icon: "",
          },
          {
            name: "Restaurant Floor Map",
            url: "/#/FloorPlanMap",
            icon: "",
          },   
          {
            name: "Restaurant Floor Plan",
            url: "/#/FloorPlan",
            icon: "",
          },         
          {
            name: "Meal Session",
            url: "/#/restaurantSettingList",
            icon: "",
          },
          {
            name: "Channel Management",
            url: "/#/channelManagementList",
            icon: "",
          },
          {
            name: "Parameter Master",
            url: "/#/parameterMasterList",
            icon: "",
          },
          {
            name: "Email Template",
            url: "/#/emailTemplateList",
            icon: "",
          },
          {
            name: "SMS Template",
            url: "/#/SMSTemplateList",
            icon: "",
          },
          {
            name: "WA Master Template",
            url: "/#/WhatsAppMasterTemplate",
            icon: "",
          },
          
          {
            name: "Visit Status Criteria",
            url: "/#/VisitStatusCriteriaMasterList",
            icon: "",
          },
          {
            name: "Pax Wise Reservation",
            url: "/#/RestaurantPaxWiseList",
            icon: "",
          },
          {
            name: "Time Wise Restriction",
            url: "/#/TimeWiseRestriction",
            icon: "",
          },
          {
            name: "Block Time Slots",
            url: "/#/BlockTimeSlotsList",
            icon: "",
          }, 
          {
            name: "WA Email and SMS Configuration ",
            url: "/#/EmailAndSMSConfigMasterList",
            icon: "",
          },  
          {
            name: "Email Scheduler Master ",
            url: "/#/EmailSchedulerMasterList",
            icon: "",
          },        
          

          
          
        ]
      },
      {
        name: 'Reports',
        url: '',
        icon: "table",
        children: [
          {
            name: "Guest List",
            url: "/#/GuestListReport",
            icon: "",
          },
          {
            name: "Blocking Sheet",
            url: "/#/BlockingSheet",
            icon: "",
          },
          {
            name: "WalkIn",
            url: "/#/walkIn",
            icon: "",
          },
          {
            name: "Rating Wise",
            url: "/#/RatingReport",
            icon: "",
          },
          {
            name: "Cacellation and No Show",
            url: "/#/CancelNoShow",
            icon: "",
          },
          {
            name: "Guest View Status",
            url: "/#/GuestVisitStatus",
            icon: "",
          },
          {
            name: "Flag Wise Guest List ",
            url: "/#/FlagWiseGuestVisitStatus",
            icon: "",
          },
          {
            name: "Repeat and regular guest report   ",
            url: "/#/RepeatRegGuestView",
            icon: "",
          },
          {
            name: "Channel Management List Report",
            url: "/#/ChannelListReport",
            icon: "",
          },   
          {
            name: "Guest Profile  Report",
            url: "/#/GuestDataReport",
            icon: "",
          }, 
        ]
      }
    ]
  },
  { 
    name: "Reservation",      
    url: "/#/reservation",
    icon: "backup_table",
  },
  {
    name: "Account Selection",
    url: "/#/account-selection",
    icon: "account_circle",
  },
  {
    name: "Home",
    url: "/#/home",
    icon: "home",
  },
];
interface ExampleFlatNode {
expandable: boolean;
name: string;
url: string;  
icon: string;
level: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToasterService]
})


export class AppComponent {
  showHead: boolean = false;
  isChecked = false;
  storedTheme: string =  'theme-light';
  isClicked: any = {};
  isTrue: boolean =false  
  showNotifyPanel = false;
  display = "none";

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });
      
    this.dataSource.data = TREE_DATA;
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      url: node.url,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  mouseleave(): void {
    this.treeControl.collapseAll();
  }

  ngOnInit() {

    // console.log('check subitem', this.listArray[0].subCat[0].Children);
    // console.log('check node.expandable', expandable: !!node.children && node.children.length > 0,);

    this.storedTheme = localStorage.getItem('themeColor');
    document.documentElement.setAttribute('data-theme', this.storedTheme);
    if(this.storedTheme === 'theme-dark'){
      this.isChecked = true
    }else{
      this.isChecked = false
    }
    // this.items = this.getItems([this.simpleItems, this.simpleItems2]);
  }

  // items: any;

  // simpleItems = {
  //   text: 'parent-1',
  //   value: 'p1',
  //   children: [
  //     {
  //       text: 'child-1',
  //       value: 'c1'
  //     }, {
  //       text: 'child-2',
  //       value: 'c2',
  //       children: [
  //         {
  //           text: 'child-1-2',
  //           value: 'c12'
  //         },
  //         {
  //           text: 'child-1-2',
  //           value: 'c12',
  //           disabled: true,
  //           collapsed: true,
  //           checked: true,
  //           children: [
  //             {
  //               text: 'child-1-2',
  //               value: 'c12'
  //             },
  //             {
  //               text: 'child-1-2',
  //               value: 'c12'
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //   ]
  // };

  // simpleItems2 = {
  //   text: 'parent-2',
  //   value: 'p2',
  //   collapsed: true,
  //   children: [
  //     {
  //       text: 'child-1',
  //       value: 'c1'
  //     }, {
  //       text: 'child-2',
  //       value: 'c2',
  //       children: [
  //         {
  //           text: 'child-1-2',
  //           value: 'c12'
  //         },
  //         {
  //           text: 'child-1-2',
  //           value: 'c12',
  //           disabled: true,
  //           collapsed: true,
  //           checked: true,
  //           children: [
  //             {
  //               text: 'child-1-2',
  //               value: 'c12'
  //             },
  //             {
  //               text: 'child-1-2',
  //               value: 'c12'
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //   ]
  // };


  // getItems(parentChildObj) {
  //   let itemsArray = [];
  //   parentChildObj.forEach(set => {
  //     itemsArray.push(new TreeviewItem(set))
  //   });
  //   return itemsArray;
  // }
  
  // listArray: any = [
  //   { 
  //     name: "Configuration",    
  //     "icon": "fas fa-file-alt",
  //     subCat: [
  //       {
  //         "name": "Account Master",
  //         "id": "accountMaster",
  //         "icon": "fas fa-city",
  //         "url": "/#/account-master-list",
  //       },
  //       {
  //         "name": "Role Master",
  //         "id": "roleMaster",
  //         "icon": "fas fa-city",
  //         "url": "/#/role-master-list",
  //       },
  //       {
  //         "name": "User Master",
  //         "id": "userMaster",
  //         "icon": "fas fa-city",
  //         "url": "/#/user-master-list",
  //       },
  //       {
  //         "name": "Security Master",
  //         "id": "securityMaster",
  //         "icon": "fas fa-city",
  //         // "url": "/#/right-list",
  //         Children: [
  //           {
  //             "name": "Account Selection",
  //             "url": "/#/account-selection",
  //           },
  //           {
  //             "name": "Account Selection",
  //             "url": "/#/account-selection",
  //           }
  //         ],
  //         childrenOpen: false
  //       }

  //     ],
  //     subCatOpen: false
  //   },
  //   { 
  //     name: "Reservation",      
  //     "url": "/#/reservation",
  //     subCat: [], 
  //   },
  //   {
  //     name: "Account Selection",
  //     "url": "/#/account-selection",
  //     subCat: [], 
  //   },
  //   {
  //     name: "Home",
  //     subCat: [],
  //   },
  // ];


  // innerArrayLength = this.listArray[0].subCat[0];

  onClickSideBarOptions(item: any, innerArrayLength){
    

    // debugger
    // if(item.name === "Reservation"){
    //   this.router.navigate(['/reservation']);
    // }
    // if(item.name === "Account Selection"){
    //   this.router.navigate(['/account-selection']);
    // }
    // if(item.name === "Home"){
    //   this.router.navigate(['/home']);
    // }
    // if(item.name === "Account Master"){
    //   this.router.navigate(['./account-master']);
    // }
    // if(item.name === "Role Master"){
    //   this.router.navigate(['./role-master-list']);
    // }
    
    // if(item.name === "User Master"){
    //   this.router.navigate(['./user-master-list']);
    // }
    console.log('check subcat', item)
    
    // if(innerArrayLength.name === "Role Master"){
    //   this.router.navigate(['./home']);
    // }

    
  }

  // public toastConfig: ToasterConfig = new ToasterConfig({
  //   positionClass: 'toast-top-right',
  //   animation: 'fade',
  //   showCloseButton: true,
  //   limit: 1
  // });
  // isProgressing: boolean = true;
  // accountingDate: string = this.commonService.formatDate(this.localStorageService.getAccountingDate(), 'dd mmm yy', ' ');
  // accountingStatus: string = "Pending";
  // // title = 'customreportApp';
  // lang = 'en';
  // TRANSLATE: any = TRANSLATE['en'];
  // propertyName: string = this.localStorageService.getSelectedHotelDetails().HotelName;
  // propertyAddress: string = this.localStorageService.getSelectedHotelDetails().Area + this.localStorageService.getSelectedHotelDetails().Area ? ", " : "" + this.localStorageService.getSelectedHotelDetails().City;
  // Pmscust = this.localStorageService.getDefaultPmsCustCode();
  // User:any={
  //   "Name":this.localStorageService.getUserDetails().UserName,
  //   "Email":this.localStorageService.getUserDetails().LoginID
  // }
  // page:string = window.location.hash.substr(2);
  // userAccessType: any = this.localStorageService.getUserDetails().UserAccessType;
  // constructor(
  //   public router: Router,
  //   private localStorageService: LocalStorageService,
  //   private commonService: CommonService,
  //   public _webServices: WebService
  // ) {

  // }

  fixedMenu(){
    var getMenustable = document.getElementById('sideMenuBar');
    getMenustable.classList.toggle('menuFixed');
  }

  navigatePage(elem) {
    // if(routeURL != 'sms-gateway'){
    //   window.location.href = document.location.origin + '/#/'+routeURL;
    // }
    if (elem.islocal)
    this.router.navigate([elem.url]);
  else
    window.location.href = document.location.origin + elem.url;
    //this.router.navigate(['/', routeURL]);
  }
  goToReservation(){
    // debugger
    window.location.href = "http://" + window.location.host + "/#/reservation";
  }
  backToHome() {
    window.location.href = "http://" + window.location.host + "/#/home";
  } 
  logout(): void {
    // Clears all local storages
    this.router.navigate(['/login']);
    // if (document.location.origin.includes('localhost'))
      // return;
    // this.localStorageService.clearAllLocalStorages();
    // window.location.href = document.location.origin + '/#/logout';
  }
  OpenMenuBar(){
    let sidebar=document.getElementById('sideMenuBar');
    let iconrotate=document.getElementById('rotatespan');
    if(sidebar.classList.contains('active')){
    sidebar.classList.remove('active');
    iconrotate.classList.remove('rotate');
    
    }
    else{
    sidebar.classList.add('active');
    iconrotate.classList.add('rotate');
    }
  }
  ngDoCheck() {
    const currentRoutePath = this.router.url;
    // if(currentRoutePath === "/account-selection"){
    //   this.isClicked = "Account Selection"
    // }
    // if(currentRoutePath === "/reservation"){
    //   this.isClicked = "Reservation"
    // }
  }
  changeTheme(event){
    // var getPath = window.location.pathname.split('/');
    // console.log('dsdsdsds', getPath)
    // console.log('ssdsdsd;sldsd', this.router.url);
    // if(this.router.url === '/home' && this.isChecked){
    //   alert('Dashboard is not supported for Dark theme.')      
    //   localStorage.setItem('themeColor', 'theme-light');
    //   this.storedTheme = localStorage.getItem('themeColor');
    //   document.documentElement.setAttribute('data-theme', this.storedTheme);
    // }
    if(this.isChecked){
      if(this.router.url === '/home'){
        alert('Dashboard is not supported for Dark theme.')  
        // preventdefault() ;
        event.stopPropagation();
        !this.isChecked
        // this.stop();
        // !event.isChecked;

      };
      localStorage.setItem('themeColor', 'theme-dark');
      this.storedTheme = localStorage.getItem('themeColor');
      document.documentElement.setAttribute('data-theme', this.storedTheme);
      // if(this.router.url === '/home'){
      // }
    }else{
      localStorage.setItem('themeColor', 'theme-light');
      this.storedTheme = localStorage.getItem('themeColor');
      document.documentElement.setAttribute('data-theme', this.storedTheme);
    }
  }
  stop() {
    throw new Error('Method not implemented.');
  }

  MoveToreservation(item: any){
    if(item === "Reservation"){
      this.router.navigate(['/reservation']);
    }
  }
  // toggleSubCat(item: any,) {
  //   debugger
  //   this.onClickSideBarOptions(item, this.innerArrayLength)
  //   item.subCatOpen = !item.subCatOpen;
  //   item.subCat.childrenOpen = !item.subCat.childrenOpen;
  // }
  // toggleChildrenSubCat(item: any,) {
  //   debugger
  //   item.subCat.childrenOpen = !item.subCat.childrenOpen;
  //   console.log('childrenOpen', item.subCat.childrenOpen);
  //   item. stopPropagation();
  // }

  
  showNotification(){
    this.showNotifyPanel = !this.showNotifyPanel;
  }
  
}

