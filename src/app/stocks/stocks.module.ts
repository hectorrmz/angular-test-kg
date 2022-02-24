import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: StocksListComponent },
  { path: ':id', component: StockDetailsComponent },
];

@NgModule({
  declarations: [
    StocksListComponent,
    StockItemComponent,
    StockDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class StocksModule {}
