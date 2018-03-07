import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  btnValue: string;
  name: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  userObject: any;
  url: string;
  forProfile: boolean;

  duplicateEmail: boolean;

  constructor(private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: DataService,
    private router: Router) { }

  ngOnInit() {
    debugger;
    if (this.router.url == "/profile") {
      this.forProfile = false;
      this.btnValue = "Update";
      this.authService.getProfile().subscribe(data => {
        debugger;
        this.userObject = data.user;
        this.name = this.userObject.name;
        this.mobile = this.userObject.mobile;
        this.email = this.userObject.email;
      });
    }
    else {
      this.btnValue= "Sign Up";
      this.forProfile = true;
      this.name = ''; this.mobile = ''; this.password = ''; this.email = '';
    }

  }

  isNumber(evt) {
    evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onRegisterSubmit() {
    debugger;
    if (this.router.url == '/profile') {
      const updateUser = {
        id: this.userObject._id,
        name: this.name,
        mobile: this.mobile,
        email:this.email
      }
      if (!this.validateService.validateProfile(updateUser)) {
        this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });

        return false;
      }
      if (this.mobile.length < 10) {
        this.flashMessage.show('Please enter your 10 digit mobile number', { cssClass: 'alert-warning', timeout: 3000 });
        return false;
      }

      this.authService.updateProfile(updateUser).subscribe(data => {
        if (data.ok == 1) {
          this.flashMessage.show('Profile Updated Successfully', { cssClass: 'alert-primary', timeout: 3000 });
          this.router.navigate(['/dashboard']);
        }
      });
    }
    else if (this.router.url == '/register') {
      const user = {
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        password: this.password,
        loginType:"Through Sign Up"
      };

      // Required Fields
      if (!this.validateService.validateRegister(user)) {
        this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      }

      // Validate Mobile Number
      if (this.mobile.length < 10) {
        this.flashMessage.show('Please enter your 10 digit mobile number', { cssClass: 'alert-warning', timeout: 3000 });
        return false;
      }

      // Validate Email
      if (!this.validateService.validateEmail(user.email)) {
        this.flashMessage.show('Please use a valid email', { cssClass: 'alert-info', timeout: 3000 });
        return false;
      }
      else {
        // if (this.validateService.validateEmail(user.email)) {
        this.authService.checkDuplicateEmail(user).subscribe(data => {
          if (data.userEmail == "CAN TAKE") {
            // this.flashMessage.show('Email is available', { cssClass: 'alert-primary', timeout: 3000 });
            // Register User
            this.authService.registerUser(user).subscribe(data => {
              if (data.msg == "User Registered") {
                this.flashMessage.show('You are now registerd and can log in', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/login']);
              } else {
                this.flashMessage.show('Something went wrong. Please try again', { cssClass: 'alert-warning', timeout: 3000 });
                this.router.navigate(['./register']);
              }
            });
          }
          else if (data.userEmail == user.email) {
            this.flashMessage.show(data.userEmail + ' is already taken', { cssClass: 'alert-primary', timeout: 3000 });
            return false;
          }
        });
        //}
      }
    }
  }
}
