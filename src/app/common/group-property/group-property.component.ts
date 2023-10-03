import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROWS_PER_PAGE, STATUS, ROLES, USER_TYPE, CHAR } from '../../shared/constant/table-column.const';
import { WebService } from '../../shared/services/web.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-group-property',
  templateUrl: './group-property.component.html',
  styleUrls: ['./group-property.component.scss'],
  providers: [CommonService]
})
export class GroupPropertyComponent implements OnInit {

  @Output() selectionList:any = new EventEmitter();
  selectedType: string = 'group'; // Default selection type
  selectedPropertyGroup: PropertyGroupList;
  propertyGroupList: PropertyGroupList[] = [];

  // Property List
  selectedProperty: PropertyList;
  propertyList: PropertyList[] = [];

  isProgressing: boolean = false;
  ROLES = ROLES;
  USER_TYPE = USER_TYPE;

  accessList: string[] = [];

  constructor(public _localStorageService: LocalStorageService, private _commonService: CommonService, private API: WebService) { }

  ngOnInit() {
    if (USER_TYPE.IsGroupAdmin == this._localStorageService.getUserType() || USER_TYPE.IsHotelAdmin == this._localStorageService.getUserType()) { // If Group Admin Or Hotel Admin           
      this.accessList = [ROLES.IsPropertyAccess, ROLES.IsGroupAccess];
    }
    else if (USER_TYPE.IsPropertyAdmin == this._localStorageService.getUserType()) {
      this.accessList = [ROLES.IsPropertyAccess];
    }
    else {
      this.accessList = this._commonService.getRoleAccessList(this._localStorageService.getUserRoles(), this._localStorageService.getDefaultPmsCustCode(), 'RS001');
    }
    this.listPropertyGroups();
  }
  listPropertyGroups() {
    this.isProgressing = true;
    this.API.commonMethod("/group-company/" + this._localStorageService.getUserDetails().LoginID + "/active", '', 'GET')
      .subscribe(
        data => {
          if (data.Response == 'Success') {
            this.persistPropertyGroupList(data.Data);
          } 
          this.isProgressing = false;
        },
        error => {
          this.isProgressing = false;
        },
        () => {
          this.isProgressing = false;
        }
      );
  }
  persistPropertyGroupList(data: any[]) {
    let x: any = this._commonService.userTypeWiseData(USER_TYPE, this._localStorageService.getUserType(), data, this._localStorageService.getUserRoles(), this._localStorageService.getDefaultGroupCode(), 'FXRATE001', true);
    this.propertyGroupList = x.list;
    this.selectedPropertyGroup = x.defaultList;
    if (this.propertyGroupList && this.propertyGroupList.length > 0 && this.accessList.length > 0) {
      if (this.accessList.indexOf(ROLES.IsGroupAccess) !== -1 && this.selectedType == 'group') {
        // this.listRows();
       this.EmitParent();
      } else {
        this.selectedType = 'property';
        this.listProperties();
      }
    }
  }
  listProperties() {
    if(!this.selectedPropertyGroup) return;
    this.isProgressing = true;
    this.API.commonMethod("hotel-info/" + this.selectedPropertyGroup.PropertyGroupCode +"/" + this._localStorageService.getUserDetails().LoginID + "/active",'','GET','Config')
      .subscribe(
        data => {
          if (data.Response == 'Success') {
            this.persistPropertyList(data.Data);
          }

          this.isProgressing = false;
        },
        error => {

          this.isProgressing = false;
        },
        () => {
          this.isProgressing = false;
        }
      );
  }

  persistPropertyList(data: PropertyList[]) {
    let x: any = this._commonService.userTypeWiseData(USER_TYPE, this._localStorageService.getUserType(), data, this._localStorageService.getUserRoles(), this._localStorageService.getDefaultPmsCustCode(), 'FXRATE001', false);
    this.propertyList = x.list;
    this.selectedProperty = x.defaultList;
    this.EmitParent();
  }
  selectType(type: any) {
    this.selectedType = type.value;
    if(this.selectedType == 'property'){
      this.listProperties();
    }else{
      this.EmitParent();
    }
  }
  EmitParent(){
    this.selectionList.emit({
      selectedType:this.selectedType,
      selectedGroup:this.selectedPropertyGroup,
      selectedPropery:this.selectedProperty
    });
  }

}



export class selectedRowModel {
  id: number;
  code: string;
  name: string;
  is_default: boolean;
  is_derived: boolean;
}

/**
 * Property Group List
 */
export class PropertyGroupList {
  PropertyGroupID: number;
  PMSCUSTCODE: number;
  PropertyGroupCode: string;
  PropertyGroupName: string;
  GroupCompany: string;
}

/**
 * Property List
 */
export class PropertyList {
  PMSCUSTCODE: number;
  PropertyCode: string;
  PropertyName: string;
  GroupCompany: any;
  GroupCode: string;
  IsInterfaceApplicable?: boolean;
  IsGSTApplicable?: boolean;
}
