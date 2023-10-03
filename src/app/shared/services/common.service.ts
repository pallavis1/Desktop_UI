import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service'


@Injectable()
export class CommonService {

  constructor(

    public _localStorageService: LocalStorageService
  ) { }
  genericSort(data, key) {
    return data.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  genericDuplicateList(data: any, key: string) {
    var valueArr = data.map(function (item) { return item[key] });
    var duplicate: { "id": number, "text": string }[] = [];
    valueArr.some(function (item, idx) {
      if (valueArr.indexOf(item) != idx && JSON.stringify(duplicate).indexOf(JSON.stringify(data[idx])) == -1)
        duplicate.push(data[idx]);
    });
    return duplicate;
  }

  /**
   * Three param
   * 1. elem = id reference then type will be id
   * 2. t = time in millisecond
   * 3. type = id selector or querySelector
   */
  addFocus(elem: string, t?: number, type?: string) {
    if (type == "query") {
      if (t == undefined) {
        (<HTMLElement>document.querySelector(elem)).focus();
      }
      else {
        setTimeout(function () {
          if ((<HTMLElement>document.querySelector(elem))) {
            (<HTMLElement>document.querySelector(elem)).focus();
          }
        }, t);
      }
    }
    else {
      if (t == undefined) {
        if ((<HTMLElement>document.getElementById(elem))) {
          (<HTMLElement>document.getElementById(elem)).focus();
        }
      }
      else {
        setTimeout(function () {
          if ((<HTMLElement>document.getElementById(elem))) {
            (<HTMLElement>document.getElementById(elem)).focus();
          }
        }, t);
      }
    }
  }

  capitalize(name: string) {
    name = name.toLowerCase();
    return name.trim().replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() });
  }

  capitalizenew(name: string) {
    name = name.toLowerCase();
    return name.replace(/\w\S*/g, function (txt) { return txt.toUpperCase() });
  }


  moreData(listdata: any, columnname, keyname?): any {

    for (let data of listdata) {
      if (data[columnname] == null) {
        continue;
      }
      let splittedData = data[columnname].split(',');
      let spilttedDataLength = splittedData.length;
      keyname = keyname ? keyname : "MultiSelectView";
      if (spilttedDataLength > 2) {
        let hiddenData: string = "";
        for (let i = 2; i < spilttedDataLength; i++) {
          hiddenData += ", " + splittedData[i];
        }

        data[keyname] = splittedData[0] + ", " + splittedData[1] + "<a class='morebutton'> " + (splittedData.length - 2) + " More </a><span class='hide'><span class='allowed_click'>" + hiddenData + "</span> <a class='lessbutton'>Less</a></span>"
      }
      else {
        data[keyname] = data[columnname];
      }
    }
    return listdata;
  }

  // for showing data in list

  moreDataSeperator(listdata: any, columnname, keyname?): any {
    for (let data of listdata) {
      let splittedData = data[columnname].split('~');
      let spilttedDataLength = splittedData.length;
      keyname = keyname ? keyname : "MultiSelectView";
      if (spilttedDataLength > 2) {
        let hiddenData: string = "";
        for (let i = 2; i < spilttedDataLength; i++) {
          hiddenData += " ~ " + splittedData[i];
        }

        data[keyname] = splittedData[0] + " ~ " + splittedData[1] + "<a class='morebutton'> " + (splittedData.length - 2) + " More </a><span class='hide'><span>" + hiddenData + "</span> <a class='lessbutton'>Less</a></span>"
      }
      else {
        data[keyname] = data[columnname];
      }
    }
    return listdata;
  }

  // Convert Date Format
  formatDate(date, format, seperator, isTime?: boolean) { //"Format:dd-mm-yy,mm-dd-yy,dd/mm/yy,dd:mm:yy" & Seperator - '-','/',',',':'
    if (date != "" && date != undefined) {

      if (typeof date == 'string' && date.includes("GMT+")) {
        date = date.split("GMT+")[0];
      }
      else if (typeof date == 'string' && date.includes("+")) {
        date = date.split("+")[0];
      }
      let d = new Date(date),
        mm = '' + (d.getMonth() + 1),
        mmm: any = d.getMonth(),
        dd = '' + d.getDate(),
        yy = d.getFullYear();
      let month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      if (mm.length < 2) mm = '0' + mm;
      if (dd.length < 2) dd = '0' + dd;
      let part = format.split(seperator);
      mmm = month_names[mmm];

      let sHour = d.getHours();
      let sMinute = this.padValue(d.getMinutes());
      let sAMPM = "AM";
      let iHourCheck = Number(sHour);
      if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
      }
      else if (iHourCheck === 0) {
        sHour = 12;
      }
      sHour = this.padValue(sHour);
      try {
        if (isTime) {
          return eval(part[0]) + seperator + eval(part[1]) + seperator + eval(part[2]) + ", " + sHour + ":" + sMinute + " " + sAMPM;
        }
        return eval(part[0]) + seperator + eval(part[1]) + seperator + eval(part[2]);
      }
      catch (e) {
        return '';
      }
    }
  }
  padValue(value): number {
    return (Number(value) < 10) ? "0" + value : value;
  }

  getTimeFromDate(date: any) {
    if (date != "" && date != undefined) {
      if (typeof date == 'string' && date.includes("+")) {
        date = date.split("+")[0];
      }
      let d = new Date(date);
      let hh = d.getHours().toString();
      let mm = d.getMinutes().toString();
      if (hh.length < 2) hh = '0' + hh;
      if (mm.length < 2) mm = '0' + mm;
      return hh + ':' + mm;

    }
  }

  formatDateCalender(date) {
    if (date != "" && date != undefined) {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [month, day, year].join('/');
    }
  }


  formatSQLDate(date) {
    if (date != "" && date != undefined) {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    } else {
      return "";
    }
  }

  uniqueArray(originalArray, prop) {
    let newArray = [];
    let t = {};

    for (let i in originalArray) {
      t[originalArray[i][prop]] = originalArray[i];
    }

    for (let i in t) {
      newArray.push(t[i]);
    }

    return newArray;
  }


  // getAzureStoragePath():string{
  //   return this._configurationMicroService.getAzureStorageURL();
  // }
  getDocumentMimeTypeList() {
    return [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/gif',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-powerpoint',
      'application/vnd.ms-powerpoint.presentation.macroenabled.12',
      'application/vnd.ms-excel',
      'application/vnd.ms-excel.sheet.binary.macroenabled.12',
      'application/vnd.ms-excel.sheet.macroenabled.12',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'application/vnd.oasis.opendocument.text',
      'text/plain'
    ]
  }

  imageList() {
    return [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/gif',
    ]
  }

  CompareDate(date1: string, date2: string): boolean {
    let dateOne = new Date(date1); //Year, Month, Date
    let dateTwo = new Date(date2); //Year, Month, Date
    if (dateOne > dateTwo) {
      return true;
    } else {
      return false;
    }
  }

  CompareDateEqualTo(date1: string, date2: string): boolean {
    let dateOne = new Date(date1); //Year, Month, Date
    let dateTwo = new Date(date2); //Year, Month, Date
    if (dateOne >= dateTwo) {
      return true;
    } else {
      return false;
    }
  }


  formatDecimal(n, decimal) {
    return n.toFixed(decimal).replace(/./g, function (c, i, a) {
      return i >= 0 && c !== "." ? '' + c : c;
    });
  }

  getRoleAccessList(roles: any, defaultPmsCustCode: number, param: any): string[] { // Used
    let accessparamList: string[] = [];
    if (roles && roles.length) {
      for (let i = 0; i < roles.length; i++) {
        for (let x in roles[i].Roles) {
          if (roles[i].PmsCustCode == defaultPmsCustCode && roles[i].Roles[x].FunctionCode == param)
            // accessparamList.push(roles[i].Roles[x].FunctionName);
            accessparamList = accessparamList.concat(roles[i].Roles[x].AccessRights.split(','));
        }
      }
      if (accessparamList.length) {
        let s = new Set(accessparamList);
        let it = s.values();
        accessparamList = Array.from(it);
      }
    }
    return accessparamList;
  }
  getRoleGroupAccessList(roles: any, param: any): string[] {
    let accessparamList: string[] = [];
    if (roles && roles.length) {
      for (let i = 0; i < roles.length; i++) {
        for (let x in roles[i].Roles) {
          if (roles[i].Roles[x].FunctionCode == param) {
            accessparamList.push(roles[i].PropertyGroupCode);
            break;
          }
        }
      }
      if (accessparamList.length) {
        let s = new Set(accessparamList);
        let it = s.values();
        accessparamList = Array.from(it);
      }
    }
    return accessparamList;
  }
  getRolePropertyAccessList(roles: any, param: any): string[] {
    let accessparamList: string[] = [];
    if (roles && roles.length) {
      for (let i = 0; i < roles.length; i++) {
        for (let x in roles[i].Roles) {
          if (roles[i].Roles[x].FunctionCode == param && roles[i].Roles[x].AccessRights.split(",").indexOf('Access') != -1) {
            accessparamList.push(roles[i].PmsCustCode);
            break;
          }
        }
      }
      if (accessparamList.length) {
        let s = new Set(accessparamList);
        let it = s.values();
        accessparamList = Array.from(it);
      }
    }
    return accessparamList;
  }
  filterRoleWiseProperty(data: any[], roles: any, DefaultPMSCUSTCODE: any, paramCode: any) {
    let defaultProperty: any;
    let propertyList: any = this.getRolePropertyAccessList(roles, paramCode);
    let newData: any[] = [];
    for (let x in data) {
      if (data[x].PMSCUSTCODE == DefaultPMSCUSTCODE) {
        defaultProperty = data[x];
      }
      if (propertyList.indexOf(data[x].PMSCUSTCODE) !== -1) {
        newData.push({ "PMSCUSTCODE": data[x].PMSCUSTCODE, "PropertyName": data[x].PropertyName, "IsGSTApplicable": data[x].IsGSTApplicable, "IsInterfaceApplicable": data[x].IsInterfaceApplicable });
      }
    }
    if (defaultProperty == undefined) {
      defaultProperty = newData[0];
    }
    return { "list": newData, "defaultList": defaultProperty };
  }
  userTypeWiseData(UserTypeList, UserType, data, userRole, defaultCode, paramCode, isGroup: boolean) {
    if (UserTypeList.IsGroupAdmin == UserType || UserTypeList.IsHotelAdmin == UserType) {
      let defalut: any = data[0];
      if (isGroup) {
        for (let x in data) {
          if (data[x].PropertyGroupCode == defaultCode) {
            defalut = data[x];
            break;
          }
        }
      }
      else {

        for (let x in data) {
          if (data[x].PMSCUSTCODE == defaultCode) {
            defalut = data[x];
            break;
          }
        }
      }
      return { "list": data, "defaultList": defalut };
    }
    else if (UserTypeList.IsPropertyAdmin == UserType) {
      let defaultProperty: any = data[0];
      if (isGroup) {
        for (let x in data) {
          if (data[x].PropertyGroupCode == defaultCode) {
            defaultProperty = data[x];
            break;
          }
        }
      }
      else {
        for (let x in data) {
          if (data[x].PMSCUSTCODE == defaultCode) {
            defaultProperty = data[x];
            break;
          }
        }
      }
      return { "list": data, "defaultList": defaultProperty };
    }
    else {
      if (isGroup) {
        return this.filterRoleWiseGroup(data, userRole, defaultCode, paramCode);
      }
      else {
        return this.filterRoleWiseProperty(data, userRole, defaultCode, paramCode);
      }
    }
  }
  filterRoleWiseGroup(data, userRole, defaultCode, paramCode) {
    let groupList: any = this.getRoleGroupAccessList(userRole, paramCode);
    let flag: boolean = false;
    for (let x in data) {
      if (groupList.indexOf(data[x].PropertyGroupCode) !== -1) {
        flag = true;
        break;
      }
    }
    let newData: any[] = [];
    let defaultList: any;
    if (flag) {
      for (let x in data) {
        if (data[x].PropertyGroupCode == defaultCode) {
          defaultList = data[x];
        }
        if (groupList.indexOf(data[x].PropertyGroupCode) !== -1) {
          newData.push({ PropertyGroupCode: data[x].PropertyGroupCode, PropertyGroupName: data[x].PropertyGroupName });
        }
      }
    }
    if (!flag) {
      defaultList = newData[0];
    }
    return { "list": newData, "defaultList": defaultList };
  }
  restrictQuote(elem: any) {
    let v = elem.target.value;
    elem.target.value = v.replace(/\"|\'|<|>/g, "");
    if (elem.charCode == 39 || elem.charCode == 34 || elem.charCode == 60 || elem.charCode == 62)
      return false;
    return true;
  }
  dayOfWeekAsString(dayIndex: number) {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex];
  }

  timeDiffinMinute(arr, dep) {//sample format 24 hour format arrival="00:01" departure="02:59"
    let part1 = arr.split(':');
    let part2 = dep.split(':');
    let arrmin = Number(part1[0]) * 60 + Number(part1[1]);
    let depmin = Number(part2[0]) * 60 + Number(part2[1]);
    return depmin - arrmin;
  }

  formatNumber(num: number, seperator: string, decimal: number, formater: string) {
    if (formater == "###,###,###,###") {
      return (num).toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, '$&' + seperator);
    } else if (formater == "##,##,##,###") {
      return (num).toFixed(decimal).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1' + seperator);
    } else {
      return (num).toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, '$&' + seperator);
    }
  }

}


