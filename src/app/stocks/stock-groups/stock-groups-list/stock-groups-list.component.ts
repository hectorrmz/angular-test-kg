import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StockGroup } from 'src/app/models';
import { StockGroupService } from 'src/app/services/stock-group.service';

@Component({
  selector: 'app-stock-groups-list',
  templateUrl: './stock-groups-list.component.html',
  styleUrls: ['./stock-groups-list.component.scss'],
})
export class StockGroupsListComponent implements OnInit {
  @Input() canDelete: boolean;
  @Input() canSearch: boolean;
  @Output() searchStockGroupSelected = new EventEmitter<string[]>();

  groups: StockGroup[];
  groups$: Observable<StockGroup[]>;

  constructor(private stockGroupService: StockGroupService) {}

  ngOnInit(): void {
    this.groups$ = this.stockGroupService.getAll();
  }

  deleteGroup(id: number): void {
    this.stockGroupService.remove(id);
  }
}
