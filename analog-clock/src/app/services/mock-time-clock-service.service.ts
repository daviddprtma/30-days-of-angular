import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockTimeClockServiceService {
  private mockTime: Date = new Date();
  constructor() { 
    this.mockTime.setHours(3, 50, 0); // Set initial mock time to 12:00:00
  }

  getCurrentTime(): Date {
    return this.mockTime;
  }

}
