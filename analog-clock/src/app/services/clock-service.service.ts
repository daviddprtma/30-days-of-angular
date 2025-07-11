import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockServiceService {
  constructor() {}

  private getTime() {
    // get indonesian time
    var today = new Date();
    today.getHours();
    today.getMinutes();
    today.getSeconds();
    return today;
  }

  getCurrentTime() {
    return this.getTime();
  }
}
