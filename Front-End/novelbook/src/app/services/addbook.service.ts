import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  constructor(private http: HttpClient) { }

  // add book 
  public addBook(book: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token_here',
    });
    return this.http.post(`${baseurl}/api/book/list`, book, { headers });
  }
}

