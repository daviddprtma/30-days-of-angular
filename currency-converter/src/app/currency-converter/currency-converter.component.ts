import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterService } from '../services/currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent {
  currencyFlags: { [key: string]: string } = {
    USD: '🇺🇸',

    EUR: '🇪🇺',

    GBP: '🇬🇧',

    INR: '🇮🇳',

    JPY: '🇯🇵',

    IDR: '🇮🇩',
  };

  amount: number = 0;
  sourceCurrency: string = 'USD';
  targetCurrency: string = 'EUR';
  result: number = 0;
  conversionRate: number | null = null;
  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'IDR'];

  constructor(private currencyConverterService: CurrencyConverterService) {}

  updateConversionRate() {
    this.conversionRate = this.currencyConverterService.getConversionRate(
      this.sourceCurrency,
      this.targetCurrency
    );
    if (this.conversionRate === null) {
      this.result = 0; // Reset result if no conversion rate is found
      return;
    }
    this.result = this.currencyConverterService.convertCurrency(
      this.amount,
      this.sourceCurrency,
      this.targetCurrency
    );
  }

  convertCurrency() {
    this.updateConversionRate();
  }

  getFlagCurrency(currency: string): string {
    return `${this.currencyFlags[currency] || ''} ${currency}`;
  }
}
