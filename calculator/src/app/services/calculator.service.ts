import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private currentOperand: string = '';
  private previousOperand: string = '';
  private operator: string | null = null;

  constructor() {}

  private isOperator(input: string): boolean {
    return ['+', '-', '*', '/'].includes(input);
  }

  private clearcalculate(): void {
    this.currentOperand = '';
    this.clearOperation();
  }

  private clearOperation(): void {
    this.previousOperand = '';
    this.operator = null;
  }

  getDisplay(): string {
    const previous = this.previousOperand || '';
    const operator = this.operator || '';
    const current = this.currentOperand || '';
    return previous + operator + current;
  }

  private handleNumber(num: string): void {
    this.currentOperand += num;
  }

  private calculate(): void {
    if (!this.previousOperand || !this.currentOperand || !this.operator) {
      return;
    }
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    let result: number;
    switch (this.operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current === 0 ? NaN : prev / current; // Avoid division by zero
        break;
      default:
        return;
    }
    this.currentOperand = isNaN(result) ? 'Error ' : result.toString();
    this.clearOperation();
  }

  private handleOperator(op: string): void {
    if (this.currentOperand === '' && this.previousOperand === '') return;
    if (this.previousOperand !== '' && this.operator) {
      this.calculate();
    }
    this.operator = op;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  handleInput(value: string): void {
    if (value === 'C') {
      this.clearcalculate();
    } else if (value === '=') {
      this.calculate();
    } else if (this.isOperator(value)) {
      this.handleOperator(value);
    } else {
      this.handleNumber(value);
    }
  }
}
