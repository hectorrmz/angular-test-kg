import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MockComponents } from 'ng-mocks';
import { StockGroupsListComponent } from '../shared/stock-groups-list/stock-groups-list.component';
import { StockGroupFormComponent } from './stock-group-form/stock-group-form.component';

import { StockGroupsComponent } from './stock-groups.component';

describe('StockGroupsComponent', () => {
  let component: StockGroupsComponent;
  let fixture: ComponentFixture<StockGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StockGroupsComponent,
        MockComponents(StockGroupsListComponent, StockGroupFormComponent),
      ],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
