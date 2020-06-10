import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';
import { CocktailInfoComponent } from './components/cocktail-info/cocktail-info.component';
import { InputWarningComponent } from './components/input-warning/input-warning.component';
import { NoValuePipe } from './pipes/no-value.pipe';

@NgModule({
  declarations: [
    NoValuePipe,
    InputWarningComponent,
    CocktailInfoComponent,
    CocktailCardComponent,
  ],
  imports: [CommonModule, NgbModule, NgSelectModule],
  exports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    InputWarningComponent,
    NoValuePipe,
    CocktailInfoComponent,
    CocktailCardComponent,
  ],
})
export class SharedModule {}
