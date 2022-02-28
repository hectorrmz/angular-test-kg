import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockGroupsListComponent } from './stock-groups-list.component';

describe('StockGroupsListComponent', () => {
  let component: StockGroupsListComponent;
  let fixture: ComponentFixture<StockGroupsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockGroupsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
