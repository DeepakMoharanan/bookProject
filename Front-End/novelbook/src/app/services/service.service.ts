import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http:HttpClient ) { }
  //add user
  public adduser(user:any)
  {
    return this.http.post(`${baseurl}/api/auth/signup`,user)
  }
}
