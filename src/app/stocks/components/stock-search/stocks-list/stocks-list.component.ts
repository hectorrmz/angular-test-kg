import { Component, Input } from '@angular/core';
import { Stock } from 'src/app/models';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss'],
})
export class StocksListComponent {
  @Input() stocks: Stock[];

  displayedColumns: string[] = [
    'longName',
    'symbol',
    'ask',
    'askSize',
    'currency',
    'quoteSourceName',
    'exchangeTimezoneName',
    'marketState',
    'averageDailyVolume10Day',
  ];
}
