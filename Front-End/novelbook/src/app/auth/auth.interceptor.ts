
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { StoreService } from '../services/store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storeService: StoreService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.storeService.getToken();
    if (token) {
      console.log('Token:'+ token);       
      const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
