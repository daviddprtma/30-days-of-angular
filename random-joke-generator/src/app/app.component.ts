import { Component } from '@angular/core';
import { RandomJokeGeneratorComponent } from './random-joke-generator/random-joke-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomJokeGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
