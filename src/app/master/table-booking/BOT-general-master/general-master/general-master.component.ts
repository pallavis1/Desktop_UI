import { Component, OnInit } from '@angular/core';


interface tableData {  
  id: Number;  
  designationDesc: String;  
  isActive: String;  
}

@Component({
  selector: 'app-general-master',
  templateUrl: './general-master.component.html',
  styleUrls: ['./general-master.component.scss']
})
export class GeneralMasterComponent implements OnInit {
  editMode: boolean ;

  constructor() { }

  ngOnInit() {
  }

  new(document: any){

    this.editMode = true;
  }

  save(){

    this.editMode = false;

  }
  students: tableData[] =[
    {  
      "id": 13333,  
      "designationDesc": "Jack",  
      "isActive": "jack@gmail.com",  
    },  
    {  
      "id": 2,  
      "designationDesc": "Peter",  
      "isActive": "male"  
    },  
  ]  

}
