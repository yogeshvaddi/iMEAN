import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class DataService {
  authToken: any;
  user: any;
  constructor(private http: Http) { }

  loggedIn() {
    let token = localStorage.getItem('id_token');
    this.authToken = token;
    if (this.authToken != null && this.authToken != undefined && this.authToken != '') {
      return true;
    }
    else {
      return false;
    }
  }
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:1289/users/register', user, { headers: headers }).map(res => res.json());
    return this.http.post('users/register', user, { headers: headers }).map(res => res.json());
  }
  updateProfile(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.put('http://localhost:1289/users/updateProfile', user, { headers: headers }).map(res => res.json());
    return this.http.put('users/updateProfile', user, { headers: headers }).map(res => res.json());
  }

  loginUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post("http://localhost:1289/users/authenticate", user, { headers: headers }).map(res => res.json());
    return this.http.post("users/authenticate", user, { headers: headers }).map(res => res.json());
  }

  checkDuplicateEmail(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post("http://localhost:1289/users/checkDuplicateEmail", user, { headers: headers }).map(res => res.json());
    return this.http.post("users/checkDuplicateEmail", user, { headers: headers }).map(res => res.json());
  }
  getProfile() {
    let headers = new Headers();
    let user = JSON.parse(localStorage.getItem('user'));
    //alert(JSON.stringify(user));
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:1289/users/profile', user, { headers: headers })
    //   .map(res => {
    //     //alert(JSON.stringify(res.json()));
    //     return res.json()
    //   });

    return this.http.post('users/profile', user, { headers: headers })
    .map(res => res.json());
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    //alert(JSON.stringify(user));
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_token');
  }

}
