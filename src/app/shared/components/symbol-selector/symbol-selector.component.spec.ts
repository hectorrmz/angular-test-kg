import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SymbolSelectorComponent } from './symbol-selector.component';

describe('SymbolSelectorComponent', () => {
  let component: SymbolSelectorComponent;
  let fixture: ComponentFixture<SymbolSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymbolSelectorComponent],
      imports: [MatChipsModule, MatFormFieldModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addStock()', () => {
    const value = 'AMZN';

    beforeEach(() => {
      component.stocks = [];
      component.addStock({
        value,
        chipInput: { clear: jasmine.createSpy() },
      } as any);
    });

    it('should add new stock to stocks array', () => {
      expect(component.stocks.length).toBe(1);
      expect(component.stocks[0]).toBe(value);
    });
  });

  describe('removeStock()', () => {
    const value = 'AMZN';

    beforeEach(() => {
      component.stocks = ['AMZN'];
      component.removeStock(value);
    });

    it('should remove stock from stocks array', () => {
      expect(component.stocks.length).toBe(0);
    });
  });
});
