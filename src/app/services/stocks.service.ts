import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Stock } from '../models';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private stockUrl = 'api/stock';

  constructor(private http: HttpClient) {}

  /** GET stocks from the server */
  getStocks(stocks: string[]): Observable<ApiResponse<Stock[]>> {
    const symbols = stocks.join(',');
    return this.http.get<ApiResponse<Stock[]>>(this.stockUrl, {
      params: { symbols },
    });
  }
}
