import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CryptoPriceService } from '../../services/crypto-price.service';

@Component({
  selector: 'app-chart-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chart-options.component.html',
  styleUrl: './chart-options.component.scss',
})
export class ChartOptionsComponent implements OnInit {
  coin: string = '';
  currency: string = '';
  day: string = '';

  coinOptions: string[] = [
    'bitcoin',

    'ethereum',

    'litecoin',

    'dogecoin',

    'cardano',

    'binancecoin',

    'solana',

    'polkadot',

    'ripple',

    'dogecoin',

    'uniswap',

    'chainlink',

    'shiba-inu',

    'avalanche',

    'tron',
  ];

  currencyOptions: string[] = [
    'usd',

    'eur',

    'gbp',

    'jpy',

    'aud',

    'cad',

    'chf',

    'cny',

    'inr',

    'brl',
  ];

  daysOptions: string[] = ['7', '14', '30', '90', '180', '365'];

  constructor(private cryptoPriceService: CryptoPriceService) {}
  ngOnInit(): void {
    this.coin = this.cryptoPriceService.coin;
    this.currency = this.cryptoPriceService.currency;
    this.day = this.cryptoPriceService.days;
  }

  onSubmit() {
    this.cryptoPriceService.updateCryptoOptions(
      this.coin,
      this.currency,
      this.day
    );
  }
}
