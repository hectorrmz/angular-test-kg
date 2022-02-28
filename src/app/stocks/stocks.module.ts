import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from '../shared/shared.module';

import { StockGroupsComponent } from './components/stock-groups/stock-groups.component';
import { StockGroupFormComponent } from './components/stock-groups/stock-group-form/stock-group-form.component';
import { StockGroupsListComponent } from './components/shared/stock-groups-list/stock-groups-list.component';
import { StockSearchComponent } from './components/stock-search/stock-search.component';
import { StocksListComponent } from './components/stock-search/stocks-list/stocks-list.component';

const routes: Routes = [
  { path: '', component: StockSearchComponent },
  { path: 'groups', component: StockGroupsComponent },
];

@NgModule({
  declarations: [
    StocksListComponent,
    StockSearchComponent,
    StockGroupsComponent,
    StockGroupFormComponent,
    StockGroupsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

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
    MatListModule,

    SharedModule,
  ],
})
export class StocksModule {}
