import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Stock } from 'src/app/models';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  stock$: Observable<Stock>;

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stock$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.stockService.getStock(id);
      })
    );
  }
}
