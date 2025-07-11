import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CLOCK_CONSTANTS } from './clock.constants';
import { ClockServiceService } from '../services/clock-service.service';
import { MockTimeClockServiceService } from '../services/mock-time-clock-service.service';
@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit {
  // Rotation angles
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  clockNumbers = this.generateNumbers();

  generateNumbers() {
    const numbers = [];
    const centerOffset = CLOCK_CONSTANTS.CENTER_OFFSET;
    const radius = CLOCK_CONSTANTS.RADIUS;

    // loop through the numbers 1 to 12 to calculate positions
    for (let i = 1; i <= 12; i++) {
      const angle =
        (i - 3) * CLOCK_CONSTANTS.DEGREES_PER_HOUR * CLOCK_CONSTANTS.DEG_TO_RAD;
      const left = centerOffset + radius * Math.cos(angle);
      const top = centerOffset + radius * Math.sin(angle);

      numbers.push({
        number: i,

        position: {
          left: `${left}%`,
          top: `${top}%`,
        },
      });
    }
    return numbers;
  }

  constructor(private time: ClockServiceService) {}

  ngOnInit() {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    const currentTime = this.time.getCurrentTime();
    this.hours =
      (currentTime.getHours() % 12) * CLOCK_CONSTANTS.DEGREES_PER_HOUR +
      currentTime.getMinutes() * CLOCK_CONSTANTS.MINUTE_ADJUSTMENT +
      CLOCK_CONSTANTS.OFFSET_ROTATION;
    this.minutes =
      currentTime.getMinutes() * CLOCK_CONSTANTS.DEGREES_PER_MINUTE_SECOND +
      currentTime.getSeconds() * CLOCK_CONSTANTS.SECOND_ADJUSTMENT +
      CLOCK_CONSTANTS.OFFSET_ROTATION;
    this.seconds =
      currentTime.getSeconds() * CLOCK_CONSTANTS.DEGREES_PER_MINUTE_SECOND +
      CLOCK_CONSTANTS.OFFSET_ROTATION;
  }
}
