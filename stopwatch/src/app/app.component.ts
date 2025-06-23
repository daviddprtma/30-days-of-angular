import { Component } from '@angular/core';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StopwatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
