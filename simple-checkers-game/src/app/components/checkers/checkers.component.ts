import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckersService } from '../../services/checkers.service';

@Component({
  selector: 'app-checkers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkers.component.html',
  styleUrl: './checkers.component.scss',
})
export class CheckersComponent {
  constructor(public checkersService: CheckersService) {}

  onCellClick(row: number, col: number): void {
    if (this.checkersService.gameOver) {
      return;
    }

    if (this.checkersService.selectedPiece) {
      // If a piece is selected, try to move it
      this.checkersService.movePieces(row, col);
    } else {
      // If no piece is selected, select the clicked piece
      this.checkersService.selectedPieces(row, col);
    }
  }

  isSelected(rowIdx: number, colIdx: number): boolean {
    return (
      this.checkersService.selectedPiece?.row === rowIdx &&
      this.checkersService.selectedPiece?.col === colIdx
    );
  }

  resetGame(): void{
    this.checkersService.initBoard();
  }
}
