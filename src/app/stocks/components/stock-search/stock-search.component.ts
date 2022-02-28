import { Component, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { finalize, map, Observable } from 'rxjs';
import { Stock } from 'src/app/models';
import { StockService } from 'src/app/services/stock.service';
@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss'],
})
export class StockSearchComponent {
  stocks: string[] = [];
  stocks$: Observable<Stock[]>;
  isLoading: boolean;

  constructor(private stockService: StockService) {}

  searchStocks(): void {
    this.isLoading = true;
    this.stocks$ = this.stockService.getStocks(this.stocks).pipe(
      map((apiResponse) => apiResponse.quoteResponse?.result),
      finalize(() => (this.isLoading = false))
    );
  }

  searchStocksSelected(stocks: string[]): void {
    this.stocks = stocks;
    this.searchStocks();
  }
}
