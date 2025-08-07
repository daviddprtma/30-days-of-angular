import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  constructor() {}

  private conversionRates: { [key: string]: { [key: string]: number } } = {
    USD: { EUR: 0.96, GBP: 0.75, INR: 74.5, JPY: 109, IDR: 16.462 },

    EUR: { USD: 1.04, GBP: 0.88, INR: 77, JPY: 113, IDR: 18.716 },

    GBP: { USD: 1.33, EUR: 1.14, INR: 100, JPY: 150, IDR: 21.818 },

    INR: { USD: 0.013, EUR: 0.011, GBP: 0.01, JPY: 1.5, IDR: 187.75 },

    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0067, INR: 0.67, IDR: 110.64 },

    IDR: {
      USD: 0.000061,
      EUR: 0.000053,
      GBP: 0.000046,
      INR: 0.0053,
      JPY: 0.0091,
    },
  };

  getConversionRate(source: string, target: string): number | null {
    if (this.conversionRates[source] && this.conversionRates[source][target]) {
      return this.conversionRates[source][target];
    }
    return 0; // Return 0 if no conversion rate is found
  }

  convertCurrency(amount: number, source: string, target: string): number {
    const rate = this.getConversionRate(source, target);
    if (rate === null) {
      return 0; // Return 0 if no conversion rate is found
    }
    return parseFloat((amount * rate).toFixed(2)); // Convert and round to 2 decimal places
  }
}
