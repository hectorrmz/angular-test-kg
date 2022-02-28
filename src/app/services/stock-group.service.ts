import { Injectable } from '@angular/core';
import { StockGroup } from '../models';

const MOCKED_GROUPS: StockGroup[] = [
  {
    id: 1,
    name: 'Test',
    description: 'This is a description',
    stocks: ['AMC', 'AMZN', 'AAPL', 'AMD'],
  },
  {
    id: 2,
    name: 'Another Test',
    description: 'This is another description',
    stocks: ['TW', 'TSLA', 'F', 'LA', 'TW'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class StockGroupService {
  private groups: StockGroup[] = [];

  constructor() {
    this.groups = MOCKED_GROUPS;
  }

  getAll(): StockGroup[] {
    return this.groups;
  }

  add(group: StockGroup): void {
    group = { ...group, id: Math.random() };
    this.groups.push(group);
  }

  remove(id: number): void {
    this.groups = this.groups.filter((group) => group.id != id);
  }
}
