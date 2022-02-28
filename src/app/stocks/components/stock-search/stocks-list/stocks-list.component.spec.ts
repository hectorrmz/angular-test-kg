import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { StocksListComponent } from './stocks-list.component';

describe('StocksListComponent', () => {
  let component: StocksListComponent;
  let fixture: ComponentFixture<StocksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StocksListComponent],
      imports: [MatTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set table headers', () => {
    expect(component.displayedColumns).toEqual([
      'longName',
      'symbol',
      'ask',
      'askSize',
      'currency',
      'quoteSourceName',
      'exchangeTimezoneName',
      'marketState',
      'averageDailyVolume10Day',
    ]);
  });
});
