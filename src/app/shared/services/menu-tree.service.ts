// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Locale, LocaleService, LocalizationService } from 'angular2localization';
// import { LocalStorageService } from '../services/local-storage.service';
// import { ConfigurationMicroService } from './configuration-micro.service';
// // import { CookiesService } from '../../shared/services/storage/cookies.service';
// // import { LocalStorageService } from '../../shared/services/storage/local-storage.service';
// @Injectable()
// export class MenuTreeService extends Locale {
//     userAccessType: any = this._localStorageService.getUserDetails().UserAccessType;
//     constructor(
//         private http: HttpClient,
//         public localeService: LocaleService,
//         public localizationService: LocalizationService,
//         private _configurationMicroService: ConfigurationMicroService,
//         // private cookieService: CookiesService,
//         public _localStorageService: LocalStorageService
//     ) {
//         super(localeService, localizationService);

//     }
//     private baseEndPoint: string = this._configurationMicroService.getConfigUrl();
//     updateTranslationProvider() {
//         this.localizationService.translationProvider('./resources/component/menu-');
//         this.localizationService.updateTranslation();
//     }

//     setDir(): any {
//         if (this.localizationService.languageCode === "ar") {
//             return 'rtl';
//         } else {
//             return 'ltr';
//         }
//     }

//     // public getMenuTreeLists() {
//     //     // return this.http.get('./resources/component/menu-' + this.localizationService.languageCode + '.json').map(res => res.json());
//     //     return this.http.get(this.baseEndPoint + '/menu/' + this.localizationService.languageCode).map(res => res.json());
//     // }

//     public getMenuTreeLists() {
//         let url = '';
//         if (this.userAccessType == 'FXCRS') {
//             url = this.baseEndPoint + '/menucrs/' + this.localizationService.languageCode
//         } else {
//           url = this.baseEndPoint + '/menu/' + this.localizationService.languageCode
//         }
//         return this.http.get(url).map(res => res.json());
//         // http://fortunecloudqaapi.azurewebsites.net/v1/configuration/menu/fr
//         // return this.http.get('./resources/component/menu-' + this.localizationService.languageCode + '.json').map(res => res.json());
//       }


//     listRowPost(data: any, url) {
//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');
//         headers.append('Authorization', 'bearer ' + this.cookieService.getAccessToken('config_access_token'));

//         let baseEndPoint = this.baseEndPoint + "/" + url;

//         return this.http.post(baseEndPoint, data, { headers: headers }).map(res => res.json());
//     }

//     // Gets Product Licence List
//     getProductLicenceList(language: string) {
//         let headers = new Headers();

//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');

//         let baseEndPoint = "./resources/products/products-" + language + ".json";
//         return this.http.get(baseEndPoint, { headers: headers }).map(res => res.json());
//     }
// }