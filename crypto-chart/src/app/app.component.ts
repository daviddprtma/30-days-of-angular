import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CryptoPriceChartComponent } from './components/crypto-price-chart/crypto-price-chart.component';
import { ChartOptionsComponent } from './components/chart-options/chart-options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CryptoPriceChartComponent, ChartOptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
