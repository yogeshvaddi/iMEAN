import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name == undefined || user.mobile == undefined || user.email == undefined || user.password == undefined || user.name == '' || user.mobile == '' || user.email == '' || user.password == '' || user.name == null || user.mobile == null || user.email == null || user.password == null) {
      return false;
    }
    else {
      return true;
    }
  }
  validateProfile(user) {
    if (user.name == undefined || user.name == '' || user.name == null || user.mobile == undefined || user.mobile == '' || user.mobile == null) {
      return false;
    }
    else {
      return true;
    }
  }
  validateLogin(user) {
    if (user.email == undefined || user.email == '' || user.password == undefined || user.password == '' || user.email == null || user.password == null) {
      return false;
    }
    else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
