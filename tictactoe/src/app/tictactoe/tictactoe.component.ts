import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.scss',
})
export class TictactoeComponent {
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;
  isDraw: boolean = false;

  private isCellOccupied(index: number): boolean {
    return this.board[index] !== '';
  }

  private isGameOver(): boolean {
    return this.winner !== null || this.isDraw;
  }

  private isMoveInvalid(index: number): boolean {
    return this.isCellOccupied(index) || this.isGameOver();
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return true;
      }
    }
    return false;
  }

  private isBoardFull(): boolean {
    return this.board.every((cell) => cell !== '');
  }

  private updateGame(index: number): void {
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
      this.isDraw = false;
    } else if (this.isBoardFull()) {
      this.isDraw = true;
    } else {
      this.switchPlayer();
    }
  }

  makeMove(index: number): void {
    if (this.isMoveInvalid(index)) {
      return;
    }

    this.board[index] = this.currentPlayer;
    this.updateGame(index);
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }
}
