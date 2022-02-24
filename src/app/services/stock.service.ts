import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Stock } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stockUrl = 'api/stocks';

  constructor(private http: HttpClient) {}

  /** GET stocks from the server */
  getStocks(): Observable<Stock[]> {
    return this.http
      .get<Stock[]>(this.stockUrl)
      .pipe(catchError(this.handleError<Stock[]>([])));
  }

  /** GET stock by id */
  getStock(id: number): Observable<Stock> {
    const url = `${this.stockUrl}/${id}`;
    return this.http
      .get<Stock>(url)
      .pipe(catchError(this.handleError<Stock>()));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
