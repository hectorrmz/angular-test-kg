import { Component, OnInit } from '@angular/core';
import { StockGroup } from 'src/app/models';
import { StockGroupService } from 'src/app/services/stock-group.service';

@Component({
  selector: 'app-stock-group-form',
  templateUrl: './stock-group-form.component.html',
  styleUrls: ['./stock-group-form.component.scss'],
})
export class StockGroupFormComponent implements OnInit {
  private initialFormState = {
    name: '',
    description: '',
    stocks: [],
  };

  group: StockGroup = this.initialFormState;

  constructor(private stockGroupService: StockGroupService) {}

  ngOnInit(): void {}

  saveGroup(): void {
    this.stockGroupService.add(this.group);
  }
}
