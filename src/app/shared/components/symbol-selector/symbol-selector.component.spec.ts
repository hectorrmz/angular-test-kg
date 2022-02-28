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
});
