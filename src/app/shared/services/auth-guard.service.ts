import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Services
// import { CommonService } from '../services/common.service'
import { LocalStorageService } from '../services/local-storage.service';
import { ConfigurationMicroService } from '../services/configuration-micro.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private _configurationMicroService: ConfigurationMicroService,
    public _localStorageService: LocalStorageService
  ) {
    /**
     * @param: router
     * @param: _localStorageService
     */
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._localStorageService.getCookie('config_access_token')) {

      if (
        this._localStorageService.getUserDetails().UserType == 'HotelAdmin' ||
        this._localStorageService.getUserDetails().UserType == 'GroupAdmin' ||
        this._localStorageService.getUserDetails().UserType == 'PropertyAdmin') {
        return true;
      }
      let x: string[] = this.getRoleAccessList(this._localStorageService.getUserRoles(), route.data[0]);

      if (x.length) {
        return true;
      }
      return false;
    } else {
      if (window.location.host != "localhost:4200") {
        // window.location.href = this._configurationMicroService.getFortuneCloudAppUrl();
      }
      return false;
    }
  }

  getRoleAccessList(roles: any, param: any) {
    let defaultCustCode = this._localStorageService.getDefaultPmsCustCode();
    let accessparamList: string[] = [];
    if (roles.length) {
      for (let i = 0; i < roles.length; i++) {
        for (let x in roles[i].Roles) {
          if (roles[i].Roles[x].FunctionCode == param && roles[i].PmsCustCode == defaultCustCode) {
            // accessparamList.push(roles[i].Roles[x].FunctionCode);
            accessparamList = accessparamList.concat(roles[i].Roles[x].AccessRights.split(','));
          }
        }
      }
      /*if (accessparamList.length) {
        let s = new Set(accessparamList);
        let it = s.values();
        accessparamList = Array.from(it);
      }*/
    }
    return accessparamList;
  }

}
