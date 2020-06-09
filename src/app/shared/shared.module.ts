import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CocktailInfoComponent } from './components/cocktail-info/cocktail-info.component';
import { InputWarningComponent } from './components/input-warning/input-warning.component';
import { NoValuePipe } from './pipes/no-value.pipe';

@NgModule({
  declarations: [NoValuePipe, InputWarningComponent, CocktailInfoComponent],
  imports: [CommonModule, FormsModule, NgbModule, NgSelectModule],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,

    InputWarningComponent,
    NoValuePipe,
    CocktailInfoComponent,
  ],
})
export class SharedModule {}
