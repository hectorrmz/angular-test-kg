import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksListComponent } from './stock-search/stocks-list/stocks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { StockSearchComponent } from './stock-search/stock-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { StockGroupsComponent } from './stock-groups/stock-groups.component';
import { StockGroupFormComponent } from './stock-groups/stock-group-form/stock-group-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'search', component: StockSearchComponent },
  { path: 'groups', component: StockGroupsComponent },
  { path: ':id', component: StockDetailsComponent },
];

@NgModule({
  declarations: [
    StocksListComponent,
    StockItemComponent,
    StockDetailsComponent,
    StockSearchComponent,
    StockGroupsComponent,
    StockGroupFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    SharedModule,
  ],
})
export class StocksModule {}
