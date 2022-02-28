import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from '../models';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stockUrl = 'api/stock';

  constructor(private http: HttpClient) {}

  /** GET stocks from the server */
  getStocks(stocks: string[]): Observable<ApiResponse<Stock[]>> {
    const symbols = stocks.join(',');
    return this.http.get<ApiResponse<Stock[]>>(
      `${environment.baseUrl}${this.stockUrl}`,
      {
        params: { symbols },
      }
    );
  }
}
