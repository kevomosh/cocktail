import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';

@NgModule({
  declarations: [CocktailCardComponent],
  imports: [CommonModule, FormsModule, NgbModule, NgSelectModule],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    CocktailCardComponent,
  ],
})
export class SharedModule {}
