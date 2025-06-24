import { Component } from '@angular/core';
import { FaqAccpordionComponent } from './faq-accpordion/faq-accpordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaqAccpordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
