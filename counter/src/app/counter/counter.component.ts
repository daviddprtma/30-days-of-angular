import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter: number = 0;
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounterStatus(): string {
    if (this.counter > 0) {
      return 'positive';
    } else if (this.counter < 0) {
      return 'negative';
    } else {
      return 'neutral';
    }
  }
}
