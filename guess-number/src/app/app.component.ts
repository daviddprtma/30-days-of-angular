import { Component } from '@angular/core';
import { GuessNumberComponent } from './guess-number/guess-number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GuessNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
