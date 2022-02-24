import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from 'src/app/models';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss'],
})
export class StocksListComponent implements OnInit {
  stocks$: Observable<Stock[]> = of([]);

  constructor(private stockservice: StockService) {}

  ngOnInit(): void {
    this.stocks$ = this.stockservice.getStocks();
  }
}
