import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

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
}
