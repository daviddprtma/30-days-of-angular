import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, DisplayComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  operators: string[] = ['+', '-', '*', '/'];
  buttonLayout: string[][] = [
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['C', '0', '=', '/'],
  ];

  constructor(private calculatorService: CalculatorService) {}

  handleInput(value: string): void {
    this.calculatorService.handleInput(value);
  }

  get displayValue(): string {
    return this.calculatorService.getDisplay();
  }
}
