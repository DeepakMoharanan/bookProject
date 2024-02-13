import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ViweBookService {
  
  constructor(private http: HttpClient) { }

  getBooks(pageIndex: number, pageSize: number, sortBy: string, sortDir: string): Observable<any> {
    const params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('size', pageSize.toString())
      .set('sort', sortBy)
      .set('keyword', sortDir);
    return this.http.get<any>(`${baseurl}/api/book`, { params});
  }
}

