import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { accordionAnimation } from './faq-accpordion.animations';

@Component({
  selector: 'app-faq-accpordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-accpordion.component.html',
  styleUrl: './faq-accpordion.component.scss',
  animations: [accordionAnimation.slideToggle],
})
export class FaqAccpordionComponent {
  openedIndex: number | null = null;

  faqs = [
    {
      question: 'What is Angular?',

      answer:
        'Angular is a platform for building mobile and desktop web applications.',
    },

    {
      question: 'What is a component in Angular?',

      answer:
        'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.',
    },

    {
      question: 'What are Angular directives?',

      answer:
        'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.',
    },
  ];

  toggleFaq(index: number): void {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
