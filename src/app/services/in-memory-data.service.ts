import { Injectable } from '@angular/core';
import { Stock } from '../models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const stocks: Stock[] = [
      { id: 11, name: 'UWM Holdings Corp', code: 'UWMC', value: 12.21 },
      { id: 12, name: 'United States Steel Corp. ', code: 'X', value: 12.21 },
      { id: 13, name: 'Bio-Rad Laboratories Inc. ', code: 'BIO', value: 12.21 },
      { id: 14, name: 'Qurate Retail Inc.', code: 'QRTEA', value: 12.21 },
      { id: 15, name: 'Sage Therapeutics Inc. ', code: 'SAGE', value: 12.21 },
      {
        id: 16,
        name: 'LyondellBasell Industries NV',
        code: 'LYB',
        value: 12.21,
      },
      { id: 17, name: 'Steel Dynamics Inc. ', code: 'SLDC', value: 12.21 },
      { id: 18, name: 'Nielsen Holdings PLC ', code: 'NLSD', value: 12.21 },
      { id: 19, name: 'Westlake Chemical Corp. ', code: 'WLK', value: 12.21 },
      { id: 20, name: 'Alcoa Corp.', code: 'AA', value: 12.21 },
      { id: 21, name: 'Devon Energy Corp.', code: 'DVN', value: 12.21 },
      { id: 22, name: 'Continental Resources Inc', code: 'CLR', value: 12.21 },
      { id: 23, name: 'Marathon Oil Corp.', code: 'MRO', value: 12.21 },
      { id: 24, name: 'APA Corp', code: 'APA', value: 12.21 },
      { id: 25, name: 'Russell 1000', code: 'RSS', value: 12.21 },
    ];
    return { stocks };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(stocks: any[]): number {
    return stocks.length > 0
      ? Math.max(...stocks.map((stock) => stock.id)) + 1
      : 11;
  }
}
