import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { ShowCocktailService } from 'src/app/services/show-cocktail.service';

@Component({
  selector: 'app-input-warning',
  templateUrl: './input-warning.component.html',
  styleUrls: ['./input-warning.component.scss'],
})
export class InputWarningComponent implements OnInit, OnDestroy {
  @Input() firstWarningMessage: string;
  @Input() secondWarningMessage: string;
  @Input() displayOptions: boolean;

  constructor(
    private helperService: HelperService,
    public ingredientService: IngredientService,
    private cocktailService: ShowCocktailService
  ) {}

  combined$ = combineLatest([
    this.helperService.firstInputWarning,
    this.helperService.secondInputWarning,
    this.cocktailService.showCockTail$,
  ]).pipe(
    map(([firstWarning, secondWarning, showCocktail]) => ({
      firstWarning,
      secondWarning,
      showCocktail,
    }))
  );

  ngOnInit(): void {}

  ngOnDestroy() {
    this.helperService.clearFirstInputWarning();
    this.helperService.clearSecondInputWarning();
  }
}
