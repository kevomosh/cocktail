import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';
import { InputWarningComponent } from './components/input-warning/input-warning.component';
import { NoValuePipe } from './pipes/no-value.pipe';

@NgModule({
  declarations: [CocktailCardComponent, NoValuePipe, InputWarningComponent],
  imports: [CommonModule, FormsModule, NgbModule, NgSelectModule],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    CocktailCardComponent,
    InputWarningComponent,
    NoValuePipe,
  ],
})
export class SharedModule {}
