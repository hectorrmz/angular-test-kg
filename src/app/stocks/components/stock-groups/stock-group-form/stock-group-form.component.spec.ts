import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponents } from 'ng-mocks';
import { SymbolSelectorComponent } from 'src/app/shared/components/symbol-selector/symbol-selector.component';

import { StockGroupFormComponent } from './stock-group-form.component';

describe('StockGroupFormComponent', () => {
  let component: StockGroupFormComponent;
  let fixture: ComponentFixture<StockGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StockGroupFormComponent,
        MockComponents(SymbolSelectorComponent),
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
