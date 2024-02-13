import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly key: string = "token";

  constructor() { }

  setItem(value: any): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  removeItem(): void {
    localStorage.removeItem(this.key);
  }
}
