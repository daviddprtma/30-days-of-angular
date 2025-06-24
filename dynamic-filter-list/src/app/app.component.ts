import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  searchText: string = '';
  // copy and paste it
  items: string[] = [
    'Angular Tutorial',
    'React Tutorial',
    'Vue.js Tutorial',
    'JavaScript Basics',
    'TypeScript Fundamentals',
    'Building with HTML & CSS',
    'Introduction to Node.js',
    'Getting Started with MongoDB',
    'Web Development with Node.js',
    'Advanced JavaScript Concepts',
    'Mastering Angular',
    'Learning CSS Grid',
    'Node.js for Beginners',
    'The Complete JavaScript Guide',
    'CSS Flexbox in Depth',
    'Getting Started with Express.js',
    'Deep Dive into GraphQL',
    'Modern Web Development Trends',
    'Building REST APIs with Express',
    'Introduction to Git and GitHub',
    'Web Accessibility Essentials',
  ];
}
