import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StockSearchComponent } from './stock-search.component';
import { MockComponents } from 'ng-mocks';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SymbolSelectorComponent } from 'src/app/shared/components/symbol-selector/symbol-selector.component';
import { StockGroupsListComponent } from '../shared/stock-groups-list/stock-groups-list.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StockSearchComponent', () => {
  let component: StockSearchComponent;
  let fixture: ComponentFixture<StockSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StockSearchComponent,
        MockComponents(
          SymbolSelectorComponent,
          StockGroupsListComponent,
          StocksListComponent
        ),
      ],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
