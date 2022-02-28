import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyStockGroupService } from 'src/app/mocks/test';
import { StockGroupService } from 'src/app/services/stock-group.service';

import { StockGroupsListComponent } from './stock-groups-list.component';

describe('StockGroupsListComponent', () => {
  let component: StockGroupsListComponent;
  let fixture: ComponentFixture<StockGroupsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockGroupsListComponent],
      providers: [
        {
          provide: StockGroupService,
          useValue: spyStockGroupService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should get all existing groups from service', () => {
      expect(component.groups$).toBeDefined();
      expect(spyStockGroupService.getAll).toHaveBeenCalled();
    });
  });

  describe('deleteGroup()', () => {
    const id = 1;
    beforeEach(() => {
      component.deleteGroup(id);
    });

    it('should call remove service from StockGroupService', () => {
      expect(component.groups$).toBeDefined();
      expect(spyStockGroupService.remove).toHaveBeenCalledWith(id);
    });
  });
});
