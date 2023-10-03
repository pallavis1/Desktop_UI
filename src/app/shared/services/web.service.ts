import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigurationMicroService } from '../services/configuration-micro.service';
import { LocalStorageService } from '../services/local-storage.service';

import { forkJoin } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable({ providedIn: 'root' })
export class WebService {
  optoken: any;
  queryData: any = this.queryParam(window.top.location.href);
  private URL = this.API_URL.getURL();
  private default_url_type = 'Config';
  private token: any = null;
  constructor(private http: HttpClient, private API_URL: ConfigurationMicroService,
    private localStorageService: LocalStorageService) {
    if (this.queryData == null) {
      this.optoken = this.localStorageService.getCookie('op_access_token')
    }
    else {
      this.optoken = this.queryData.token ? this.queryData.token : this.localStorageService.getCookie('op_access_token')
    }
    this.token = {
      "Config": this.localStorageService.getCookie('config_access_token'),
      "Admin": this.localStorageService.getCookie('admin_access_token'),
      "OperationUrl": this.optoken
    }
  }
  
  
  commonMethod(url: string, data: any, method?: string, url_type?: string): any {
    method = method ? method : 'POST';
    url_type = url_type ? url_type : this.default_url_type;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer ' + this.optoken
    })
    let endPoint = this.URL[url_type] + "/" + url;
    if (method == 'POST')
      return this.http.post(endPoint, data, { headers });
    else if (method == 'GET')
      return this.http.get(endPoint, { headers });
    else if (method == 'PUT')
      return this.http.put(endPoint, data, { headers });
    else if (method == 'DELETE') {
      const options = {
        headers: headers,
        body: data
      };
      return this.http.delete(endPoint, options);
    }
  }
  anonymousCommonMethod(url: string, data: any, method?: string, url_type?: string): any {
    method = method ? method : 'POST';
    url_type = url_type ? url_type : this.default_url_type;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': 'bearer ' + this.optoken
    })
   
    let endPoint = this.URL[url_type] + "/" + url;
   
    console.log(endPoint, data, { headers });
    if (method == 'POST')
      return this.http.post(endPoint, data, { headers });
    else if (method == 'GET')
      return this.http.get(endPoint, { headers });
    else if (method == 'PUT')
      return this.http.put(endPoint, data, { headers });
    else if (method == 'DELETE') {
      const options = {
        headers: headers,
        body: data
      };
      return this.http.delete(endPoint, options);
    }
  }
  async asyncCommonPostMethod(url: string, data: any, url_type?: string): Promise<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer ' + this.optoken
    })
    url_type ? url_type : this.default_url_type;
    let endPoint = this.URL[url_type] + "/" + url;
    const response: any = await this.http.post(endPoint, data, { headers: headers }).toPromise();
    return response;
  }
  createGuest(url: string, data: any) {
    let url_type: string = "OperationUrl";
    let headers = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Authorization': 'bearer ' + this.optoken
      })
    };
    return this.http.post(this.URL[url_type] + '/' + url, data, headers);
  }
  UploadDocument(url: string, data: any) {
    let url_type: string = "Config";
    let headers = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Authorization': 'bearer ' + this.optoken
      })
    };
    return this.http.post(this.URL[url_type] + '/' + url, data, headers);

  }

  DeleteDocument(url: string, filename: string, method?: string, url_type?: string) {
    method = method ? method : 'POST';
    url_type = url_type ? url_type : this.default_url_type;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'bearer ' + this.localStorageService.getCookie('config_access_token')
    })
    let endPoint = this.URL[url_type] + "/" + url;
    if (method == 'POST')
      return this.http.post(endPoint, '"' + filename + '"', { headers: headers });
  }


  queryParam(myvar) {
    let urls = myvar;
    let myurls = urls.split("?");
    let queryString = myurls[1];
    if (queryString)
      return JSON.parse('{"' + queryString.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    else
      return null;
  }

  // Fake API Calling to Test
  FakeApiCalling(url: string, data: any, method?: string, url_type?: string): any {
    method = method ? method : 'POST';
    url_type = url_type ? url_type : this.default_url_type;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': 'bearer ' + this.optoken
    })
    // let endPoint = this.URL[url_type] + "/" + url;
    let endPoint = "https://mocki.io/v1" + "/" + url;
    console.log(endPoint, data, { headers });
    if (method == 'POST')
      return this.http.post(endPoint, data, { headers });
    else if (method == 'GET')
      return this.http.get(endPoint, { headers });
    else if (method == 'PUT')
      return this.http.put(endPoint, data, { headers });
    else if (method == 'DELETE') {
      const options = {
        headers: headers,
        body: data
      };
      return this.http.delete(endPoint, options);
    }
  }

}
