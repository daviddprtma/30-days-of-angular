import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckersComponent } from './components/checkers/checkers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
