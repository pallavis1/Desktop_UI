import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { WebService } from "../shared/services/web.service";
import { LocalStorageService } from '../shared/services/local-storage.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  groupIdFormControl: FormControl;
  clientIdFormControl: FormControl;
  userEmailFormControl: FormControl;
  passwordFormControl: FormControl;
  myForm: FormGroup; // Add this line
  loginStatus: boolean = false;
  loginErrorMessage: string = "";
  storedTheme:string = localStorage.getItem('themeColor')
 
  constructor(private router: Router,private API: WebService, public _localStorageService: LocalStorageService, private _commonService: CommonService) {
    // Initialize the form controls with initial values and validators
    this.groupIdFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{3}') // Example: Accepts only three digits
    ]);

    this.clientIdFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{3}')
    ]);

    this.userEmailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8) // Example: Minimum password length of 8 characters
    ]);

    this.myForm = new FormGroup({ // Create the form group
      groupId: this.groupIdFormControl,
      clientId: this.clientIdFormControl,
      userEmail: this.userEmailFormControl,
      password: this.passwordFormControl
    });

  } 
  ngOnInit() {
   
  }
  ngDoCheck() {
    const themeColor = localStorage.getItem('themeColor');
    if (themeColor !== this.storedTheme) {
      this.storedTheme = themeColor;
    }
  }
  onSubmit() {
    try {
      if (this.myForm.valid) {
        console.log(this.myForm.value)
        const { clientId,groupId,password,userEmail } = this.myForm.value
        if(userEmail === "demo@gmail.com" && password === "123456789" ){
          this.API.FakeApiCalling('f5ebdea9-a900-48de-81ae-b46508cd51db', {email: userEmail, password }, 'GET',"fakeUrl" )
          .subscribe(
            data => {
              if (data.status) {
                // alert('get Successed')
                this.router.navigate(['/account-selection']);
              } 
            },
            error => {
              console.log(error)
              alert('Something went wrong!!!')
            },
          );
          
        }else{
          this.loginStatus = true
          this.loginErrorMessage = "Incorrect Login or Password!"
          // console.log(this.webService.anonymousCommonMethod('login', {email: userEmail, password }, 'POST',"GemURL" ));
        }
      }
    } catch (error) {
      console.log(error)
    }

  }


}
