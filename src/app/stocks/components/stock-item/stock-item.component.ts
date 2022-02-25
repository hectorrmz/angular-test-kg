import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {
  @Input() stock: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeStockDetails(): void {
    this.router.navigate([`stocks/${this.stock.id}`]);
  }
}
