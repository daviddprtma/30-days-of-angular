import { Component } from '@angular/core';
import { RockpaperscissorsComponent } from './rockpaperscissors/rockpaperscissors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RockpaperscissorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
