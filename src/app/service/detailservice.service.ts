import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailserviceService {
  constructor() {
    if (this.get) {
      this.details = JSON.parse(this.get);
    } else {
      this.details = this.details;
    }
  }
  details: any = [];
  
  get: any = localStorage.getItem('myarray');
}
