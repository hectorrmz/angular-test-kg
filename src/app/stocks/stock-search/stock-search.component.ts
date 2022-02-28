import { Component, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable } from 'rxjs';
import { Stock } from 'src/app/models';
import { StocksService } from 'src/app/services/stocks.service';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss'],
})
export class StockSearchComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [13, 188, 32] as const;
  stocks: string[] = [];
  stocks$: Observable<Stock[]>;

  constructor(private stockService: StocksService) {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      if (!this.stocks.includes(value.toUpperCase())) {
        this.stocks.push(value.toUpperCase());
      }
    }

    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    const index = this.stocks.indexOf(fruit);

    if (index >= 0) {
      this.stocks.splice(index, 1);
    }
  }

  searchStocks(): void {
    this.stocks$ = this.stockService
      .getStocks(this.stocks)
      .pipe(map((apiResponse) => apiResponse.quoteResponse?.result));
  }

  searchStocksSelected(stocks: string[]): void {
    this.stocks = stocks;
    this.searchStocks();
  }
}
