import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckersService {
  board: string[][] = [];
  currentPlayer: string = 'red';
  selectedPiece: { row: number; col: number } | null = null;
  gameOver: boolean = false;

  constructor() {
    this.initBoard();
  }

  initBoard(): void {
    this.board = Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: 8 }, (_, col) => {
        if (row < 3 && (row + col) % 2 === 1) {
          return 'black';
        } else if (row > 4 && (row + col) % 2 === 1) {
          return 'red';
        }
        return '';
      })
    );
    this.currentPlayer = 'red';
    this.selectedPiece = null;
    this.gameOver = false;
  }

  selectedPieces(row: number, col: number): boolean {
    if (this.board[row][col].startsWith(this.currentPlayer)) {
      this.selectedPiece = { row, col };
      return true;
    }
    return false;
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'red' ? 'black' : 'red';
  }

  private countPieces(color: string): number {
    return this.board.flat().filter((piece) => piece.startsWith(color)).length;
  }

  private checkGameOver(): void {
    const redPiece = this.countPieces('red');
    const blackPiece = this.countPieces('black');

    if (redPiece === 0) {
      this.gameOver = true;
      console.log('Black wins!');
    } else if (blackPiece === 0) {
      this.gameOver = true;
      console.log('Red wins!');
    }
  }

  private isValidMove(targetRow: number, targetCol: number): boolean {
    const { row, col } = this.selectedPiece!;
    const piece = this.board[row][col];
    const dx = targetCol - col;
    const dy = targetRow - row;

    if (this.board[targetRow][targetCol] !== '') {
      return false; // Target square must be empty
    }

    const isKing = piece.includes('king');

    const forwardMove =
      (this.currentPlayer === 'red' && dy === -1) ||
      (this.currentPlayer === 'black' && dy === 1);

    if (Math.abs(dx) === 1 && Math.abs(dy) === 1) {
      // king can move front or back
      return isKing || forwardMove;
    }

    // jump move
    if (Math.abs(dx) === 2 && Math.abs(dy) === 2) {
      const jumpedRow = (row + targetRow) / 2;
      const jumpedCol = (col + targetCol) / 2;
      return (
        this.board[jumpedRow][jumpedCol] != '' &&
        !this.board[jumpedRow][jumpedCol].startsWith(this.currentPlayer)
      );
    }
    // return false if it does not match any valid move
    return false;
  }

  movePieces(targetRow: number, targetCol: number): boolean {
    // if the move is not valid then return false
    if (!this.isValidMove(targetRow, targetCol)) {
      this.selectedPiece = null;
      return false;
    }

    const { row, col } = this.selectedPiece!;
    const piece = this.board[row][col];

    // move the piece to the target position
    this.board[targetRow][targetCol] = piece;
    this.board[row][col] = '';

    // handle jump
    if (Math.abs(targetRow - row) === 2) {
      const jumpRow = (row + targetRow) / 2;
      const jumpCol = (col + targetCol) / 2;
      // remove the capture piece
      this.board[jumpRow][jumpCol] = '';
    }

    // handle king
    if (
      (this.currentPlayer === 'red' && targetRow === 0) ||
      (this.currentPlayer === 'black' && targetRow === 7)
    ) {
      this.board[targetRow][targetCol] = `${this.currentPlayer} is king`;
    }

    // deselect the piece and switch player
    this.selectedPiece = null;
    this.checkGameOver();
    this.switchPlayer();
    return true;
  }
}
