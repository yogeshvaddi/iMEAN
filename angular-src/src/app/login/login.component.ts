import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../auth.service';
import { Router } from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  checkboxUserPassword: boolean;
  allFields: boolean = false;
  constructor(private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: DataService,
    private router: Router, private socialAuthService: AuthService) { }

  ngOnInit() {
    this.allFields = false;
    if (JSON.parse(localStorage.getItem('check'))) {
      this.checkboxUserPassword = true;
      this.email = localStorage.getItem('emailC');
      this.password = localStorage.getItem('passC');
    }
    else {
      this.checkboxUserPassword = false;
      this.email = '';
      this.password = '';
    }
  }
  socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        //alert(socialPlatform + " sign in data : " + JSON.stringify(userData));
        if (userData.provider == "google") {
          debugger;
          const googleUser = {
            name: userData.name,
            email: userData.email,
            image: userData.image,
            socialToken: userData.token,
            loginType: "Through Google",
          }
          this.socialUserLoginFunc(userData, googleUser);

        }
        else if (userData.provider == "facebook") {
          const facebookUser = {
            name: userData.name,
            email: userData.email,
            image: userData.image,
            socialToken: userData.token,
            loginType: "Through Facebook",
          }
          this.socialUserLoginFunc(userData, facebookUser);
        }
        else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    );
  }
  login() {
    const user = {
      email: this.email,
      password: this.password,
      loginType: "Through Sign Up"
    }
    this.allFields = true;
    if (!this.validateService.validateLogin(user) && (this.allFields)) {
      this.flashMessages.show('Please Enter all the fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    this.allFields = false;
    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('Please use a valid email', { cssClass: 'alert-info', timeout: 3000 });
      return false;
    }
    this.authService.checkDuplicateEmail(user).subscribe(data => {
      debugger;
      if (data.loginType == "Through Sign Up") {
        this.authService.loginUser(user).subscribe(data => {
          if (data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.clickRememberCheck();
            this.flashMessages.show("You are successfully Logged In", { cssClass: 'alert-success', timeout: 3000 });
            this.router.navigate(['./dashboard']);
          } else {
            this.flashMessages.show(" Please Check the credentials and try agin", { cssClass: 'alert-warning', timeout: 3000 });
            this.router.navigate(['./login']);
          }
        });
      }
      else {
        this.flashMessages.show(data.userEmail + " is available only for social logins", { cssClass: 'alert-warning', timeout: 5000 });
        this.router.navigate(['./login']);
        return false;
      }
    });


  }
  clickRememberCheck() {
    if (this.checkboxUserPassword) {
      localStorage.setItem('check', JSON.stringify(this.checkboxUserPassword));
      localStorage.setItem('emailC', this.email);
      localStorage.setItem('passC', this.password);
    } else {
      this.checkboxUserPassword = false;
      localStorage.removeItem('emailC');
      localStorage.removeItem('passC');
      localStorage.removeItem('check');

    }
  }

  socialUserLoginFunc(userData, socialUser) {
    debugger;
    this.authService.checkDuplicateEmail(socialUser).subscribe(data => {
      // alert(JSON.stringify(data.userEmail));
      if (data.userEmail == "CAN TAKE" || (data.loginType != socialUser.loginType && data.userEmail == socialUser.email)) {
        this.authService.registerUser(socialUser).subscribe(gUser => {
          if (gUser.success) {
            this.authService.loginUser({ "email": gUser.email, 
            "loginType": gUser.loginType }).subscribe(data => {
              //alert(JSON.stringify(data));
              this.authService.storeUserData(data.token, data.user);
              let SocialSignIn = socialUser.loginType == "Through Google" ? "Google" : "Facebook";
              this.flashMessages.show("You are successfully Logged In Through " + SocialSignIn + " Sign", { cssClass: 'alert-success', timeout: 3000 });
              this.router.navigate(['/dashboard']);
            });
          }
        });
      }
      else if (data.userEmail == socialUser.email && data.loginType == socialUser.loginType) {
        // if(data.user.provider == "google")
        debugger;
        this.authService.updateProfile(data.user).subscribe(gUser => {
          if (gUser.ok == 1) {
            this.authService.loginUser({ "email": data.userEmail, "loginType": data.loginType }).subscribe(data => {
              //alert(JSON.stringify(data));
              this.authService.storeUserData(data.token, data.user);
              let SocialSignIn = socialUser.loginType == "Through Google" ? "Google" : "Facebook";
              this.flashMessages.show("You are successfully Logged In Through " + SocialSignIn + " Sign", { cssClass: 'alert-success', timeout: 3000 });
              this.router.navigate(['/dashboard']);
            });
          }
        });
      }
      else {
        this.flashMessages.show('Account already exists associated with ' + userData.email, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

}
