import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rockpaperscissors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rockpaperscissors.component.html',
  styleUrl: './rockpaperscissors.component.scss',
})
export class RockpaperscissorsComponent {
  choice = ['Rock', 'Paper', 'Scissors'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  determineWinner(player: string, computer: string): string {
    if (player === computer) {
      return "It's a tie!";
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }

  play(choice: string) {
    this.playerChoice = choice;
    this.computerChoice = this.choice[this.getRandomNumber(this.choice.length)];
    this.result = this.determineWinner(this.playerChoice, this.computerChoice);
  }
}
