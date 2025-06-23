import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss',
})
export class StopwatchComponent {
  elapsedTime: number = 0;
  isRunning: boolean = false;
  timer: any;

  startStop() {
    if (this.isRunning) {
      this.stopStopwatch();
    } else {
      this.startStopwatch();
    }
  }
  private startStopwatch() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.elapsedTime += 0.1;
      }, 100);
    }
    console.log('Stopwatch started');
  }

  private stopStopwatch() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
    }
    console.log('Stopwatch stopped');
  }

  resetStopwatch() {
    this.stopStopwatch();
    this.elapsedTime = 0;
    console.log('Stopwatch reset');
  }
}
