import { Injectable } from "@angular/core";

@Injectable()
export class ConfigurationMicroService {
  gemURL = 
  // window.location.host.includes("localhost")
  //   ? "http://localhost/sms"
  //   : 
    "https://fxgem.in";
    
  private URL: any = {
    // for dev
    Config: "https://fortuneclouddevapi.azurewebsites.net/v1/configuration",
    Admin: "https://productsadminapidev.azurewebsites.net/v1/configuration",
    ReservationUrl: "https://fxreservationoperationdev.azurewebsites.net",
    OperationUrl: "https://fooperationsapidev.azurewebsites.net/V1.0.0",
    AuthorizationUrl: "https://qafxauthentication.azurewebsites.net/api",
    FxRegistration: "https://fxregistrationdev.azurewebsites.net",
    FX1Config: " https://fx1configurationapidev.azurewebsites.net/api",
    GemPOS: "http://idsnextgemposapi.azurewebsites.net/",
    SkyresPaymentGateway:"https://skyrescommunication.azurewebsites.net/api",
    GemURL: this.gemURL,
    
  };
    getConfigUrl: any;

  constructor() {
    this.setURL();
  }

  setURL() {
    let host = window.location.host;
    if (host.includes("localhost")) {
      host = "productsqa.idsnext.com";
      // host = 'productsdev.idsnext.com';
      //host = 'productsstaging.azurewebsites.net'
      // host = 'products.idsnext.com';
      //  host = 'fortunecloudsarovarui.azurewebsites.net';
    }
    if (
      host == "fortunecloudsarovarui.azurewebsites.net" ||
      host == "fxres.idsnext.com" || host == 'fx1.idsnext.live'
    ) {
      this.URL = {
        //Sarovar Production
        Config: "https://fortunecloudapi.idsnext.com/v1/configuration",
        Admin: "https://productsadminapi.idsnext.com/v1/configuration",
        ReservationUrl: "https://fxreservationoperation.azurewebsites.net",
        OperationUrl: "https://fooperationsarovarapi.azurewebsites.net",
        AuthorizationUrl: "https://fxauthenticationprod.azurewebsites.net/api",
        FxRegistration: "https://fxregistrationprod.azurewebsites.net",
        FX1Config: " https://fx1rateconfigurationapi.azurewebsites.net/api",
        GemURL: this.gemURL
      };
    } else if (host == "products.idsnext.com" || host == 'fx1.idsnext.live') {
      this.URL = {
        //Production
        Config: "https://fortunecloudapi.idsnext.com/v1/configuration",
        Admin: "https://productsadminapi.idsnext.com/v1/configuration",
        ReservationUrl: "https://fxreservationoperation.azurewebsites.net",
        OperationUrl: "https://fooperationsapi.azurewebsites.net/V1.0.0",
        AuthorizationUrl: "https://fxauthenticationprod.azurewebsites.net/api",
        FxRegistration: "https://fxregistrationprod.azurewebsites.net",
        FX1Config: " https://fx1configurationapiprod.azurewebsites.net/api",
        SkyresPaymentGateway:"https://skyrescommunication.azurewebsites.net/api",
        GemURL: this.gemURL
      };
    } else if (host == "productsqa.idsnext.com" || host == 'fx1qa.idsnext.live') {
      this.URL = {
        //QA
        Config: "https://fortunecloudqaapi.azurewebsites.net/v1/configuration",
        Admin: "https://productsadminapiqa.azurewebsites.net/v1/configuration",
        ReservationUrl: "https://fxreservationoperationqa.azurewebsites.net",
        OperationUrl: "https://fooperationsapiqa.azurewebsites.net/V1.0.0",
        AuthorizationUrl: "https://qafxauthentication.azurewebsites.net/api",
        FxRegistration: "https://fxregistrationqa.azurewebsites.net",
        FX1Config: " https://fx1configurationapiqa.azurewebsites.net/api",
        GemPOS: "http://idsnextgemposapi.azurewebsites.net/",
        SkyresPaymentGateway:"https://skyrescommunication.azurewebsites.net/api",
        GemURL: this.gemURL
      };
    } else if (
      host == "productsstaging.azurewebsites.net" ||
      host == "productsstaging.idsnext.com" || host == 'fx1staging.idsnext.live'
    ) {
      this.URL = {
        //Staging
        Config:
          "https://fortunecloudstagingapi.azurewebsites.net/v1/configuration",
        Admin:
          "https://productsadminapistaging.azurewebsites.net/v1/configuration",
        ReservationUrl: "https://fxreservationoperation.azurewebsites.net",
        OperationUrl: "https://fooperationsapistaging.azurewebsites.net/V1.0.0",
        AuthorizationUrl: "https://fxauthenticationprod.azurewebsites.net/api",
        FxRegistration: "http://fxregistrationstaging.azurewebsites.net",
        FX1Config: " http://fx1configurationapistaging.azurewebsites.net/api",
        SkyresPaymentGateway:"https://skyrescommunication.azurewebsites.net/api",
        GemURL: this.gemURL
      };
    }
  }

  /**
   * @return URL
   */
  getURL(): string {
    return this.URL;
  }
  getConfigURL(): string {
    return this.URL.getConfigURL;
  }
}
