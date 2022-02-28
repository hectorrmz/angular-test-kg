import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-symbol-selector',
  templateUrl: './symbol-selector.component.html',
  styleUrls: ['./symbol-selector.component.scss'],
})
export class SymbolSelectorComponent {
  @Input() width: string;
  @Output() stockSymbolsChanged = new EventEmitter<string[]>();
  @Input() stocks: string[] = [];

  readonly separatorKeysCodes = [13, 188, 32] as const;

  addStock(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      if (!this.stocks.includes(value.toUpperCase())) {
        this.stocks.push(value.toUpperCase());
      }
    }

    event.chipInput!.clear();
    this.updateStockList();
  }

  removeStock(stock: string): void {
    const index = this.stocks.indexOf(stock);

    if (index >= 0) {
      this.stocks.splice(index, 1);
      this.updateStockList();
    }
  }

  private updateStockList(): void {
    this.stockSymbolsChanged.emit([...this.stocks]);
  }
}
