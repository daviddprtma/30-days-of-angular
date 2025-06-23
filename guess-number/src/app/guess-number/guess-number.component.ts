import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-number.component.html',
  styleUrl: './guess-number.component.scss',
})
export class GuessNumberComponent {
  secretNumber = this.generateRandomNumber();
  attemptsLeft = 10;
  guessedNumber?: number;
  feedbackMessage: string = '';
  gameOver: boolean = false;
  score: number = 0;
  leaderboard: { score: number }[] = [];

  private static readonly MAX_NUMBER = 100;
  private static readonly MIN_ATTEMPTS = 10;

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessNumberComponent.MAX_NUMBER) + 1;
  }

  public isValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessNumberComponent.MAX_NUMBER
    );
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedbackMessage = `Please enter a number between 1 and ${GuessNumberComponent.MAX_NUMBER}.`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }

  private evaluateGuess(): void {
    if (this.guessedNumber === this.secretNumber) {
      this.endGame(true);
      // save the score to local storage
      if (this.attemptsLeft === 10) {
        this.score = 100;
      } else if (this.attemptsLeft === 9) {
        this.score = 90;
      } else if (this.attemptsLeft === 8) {
        this.score = 80;
      } else if (this.attemptsLeft === 7) {
        this.score = 70;
      } else if (this.attemptsLeft === 6) {
        this.score = 60;
      } else if (this.attemptsLeft === 5) {
        this.score = 50;
      } else if (this.attemptsLeft === 4) {
        this.score = 40;
      } else if (this.attemptsLeft === 3) {
        this.score = 30;
      } else if (this.attemptsLeft === 2) {
        this.score = 20;
      } else if (this.attemptsLeft === 1) {
        this.score = 10;
      }
      localStorage.setItem('score', this.score.toString());
      this.feedbackMessage = `Your score is ${this.score}.`;
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      if (this.guessedNumber! < this.secretNumber) {
        this.feedbackMessage = 'Too low! Try again.';
      } else {
        this.feedbackMessage = 'Too high! Try again.';
      }
    }
  }

  private endGame(isWin: boolean): void {
    this.gameOver = true;
    if (isWin) {
      this.feedbackMessage = 'Congratulations! You guessed the number!';
    } else {
      this.feedbackMessage = `Game over! The secret number was ${this.secretNumber}.`;
    }
  }

  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessNumberComponent.MIN_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = '';
    this.score = 0;

    this.gameOver = false;
  }
}
