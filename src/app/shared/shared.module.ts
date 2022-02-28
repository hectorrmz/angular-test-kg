import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SymbolSelectorComponent } from './components/symbol-selector/symbol-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SymbolSelectorComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [SymbolSelectorComponent],
})
export class SharedModule {}
