import { Component, OnDestroy, OnInit } from '@angular/core';
import { CryptoPriceService } from '../../services/crypto-price.service';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-crypto-price-chart',
  standalone: true,
  imports: [],
  templateUrl: './crypto-price-chart.component.html',
  styleUrl: './crypto-price-chart.component.scss',
})
export class CryptoPriceChartComponent implements OnInit, OnDestroy {
  chart: any;
  private dataUpdateSubscription?: Subscription;

  constructor(private cryptoPriceService: CryptoPriceService) {}

  ngOnDestroy(): void {
    if(this.dataUpdateSubscription){
      this.dataUpdateSubscription.unsubscribe();
    }
    
    if(this.chart){
      this.chart.destroy();
    }
  }
  ngOnInit(): void {
    // Initial chart rendering

    this.updateChart();

    // Subscribe to the data update observable to refresh the chart when data changes

    this.dataUpdateSubscription = this.cryptoPriceService
      .getDataUpdatedObservable()
      .subscribe(() => {
        this.updateChart();
      });
  }

  updateChart(): void {
    // Fetch updated data from the CryptoPriceService

    this.cryptoPriceService.getCryptoPrice().subscribe((data: any) => {
      // Extract labels (dates) from the API response

      // Each price entry is a tuple [timestamp, price]

      const labels = data.prices.map(
        (price: [number, number]) => new Date(price[0]).toLocaleDateString() // Convert timestamp to a human-readable date
      );

      // Extract prices from the API response

      // Second element of each tuple is the price

      const prices = data.prices.map((price: [number, number]) => price[1]);

      // If a chart instance already exists, destroy it before creating a new one

      if (this.chart) {
        this.chart.destroy();
      }

      // Create a new Chart.js line chart

      this.chart = new Chart('cryptoChart', {
        type: 'line', // Chart type: Line chart

        data: {
          labels: labels, // Set the labels (x-axis) as the extracted dates

          datasets: [
            {
              label: `${this.cryptoPriceService.coin} price (${this.cryptoPriceService.currency})`, // Dynamic label for the dataset

              data: prices, // Set the y-axis data as the extracted prices

              borderColor: 'rgb(75, 192, 192)', // Line color

              fill: false, // No fill under the line

              tension: 0.1, // Set the line curve tension for a smoother look
            },
          ],
        },

        options: {
          responsive: true, // Make the chart responsive to the container's size

          scales: {
            y: {
              beginAtZero: false, // Do not force the y-axis to start at zero (allow dynamic range)
            },
          },
        },
      });
    });
  }
}
