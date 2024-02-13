import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseurl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  //generate token
  public generateToken(loginDta: any) {
    return this.http.post(`${baseurl}/api/auth/login`, loginDta);
  }
  //login user:set token in loal storage
  public loginUser(token: string) {
    localStorage.setItem('token', token);
    return true;
  }
  //is login or not
  public isloggedin() {
    let tokenStr = localStorage.getItem('token')
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  // log out: remove form local storage
  public logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return true;
  }
  //get token
  public getToken(): string | null {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      try {
        const parsedData = JSON.parse(user);
        return parsedData?.data?.token || null;
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    }
    return null;
  }
  public checkUserExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${baseurl}/api/users/exists?username=${username}`);
  }
  //set userdetail
  public setUser() {
    localStorage.setItem('user', JSON.stringify("user"));
  }
  //getuser
  public getUser() {
    let userstr = localStorage.getItem('user');
    if (userstr != null) {
      return JSON.parse(userstr);
    } else {
      this.logout();
      return null;
    }
  }
}
