import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JokeGeneratorService } from '../services/joke-generator.service';

@Component({
  selector: 'app-random-joke-generator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-joke-generator.component.html',
  styleUrl: './random-joke-generator.component.scss',
})
export class RandomJokeGeneratorComponent {
  jokeSetup: string = '';
  jokePunchline: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private jokeService: JokeGeneratorService) {
    this.fetchJoke();
  }

  fetchJoke(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.jokeSetup = joke.setup;
        this.jokePunchline = joke.punchline;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to fetch a joke. Please try again later.';
        console.error('Error fetching joke:', error);
        this.isLoading = false;
      },
    });
  }
}
