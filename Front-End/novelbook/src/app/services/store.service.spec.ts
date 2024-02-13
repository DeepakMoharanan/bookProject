// store.service.ts
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
    const item = localStorage.getItem(this.key);
    if (item) {
      try {
        const parsedData = JSON.parse(item);
        return parsedData?.data?.token || null;
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    } else {
      console.log('No data found in local storage for key:', this.key);
      return null;
    }
  }

  removeItem(): void {
    localStorage.removeItem(this.key);
  }
}
