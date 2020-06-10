import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from '../services/helper.service';
import { IngredientService } from '../services/ingredient.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;

  constructor(
    private mainService: MainService,
    private helperService: HelperService,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.helperService.startFirstInputWarning();
  }

  private ingredientDetails$ = this.ingredientService.ingredientDetails$;
  private showDetails$ = this.ingredientService.showIngredientDetails$;
  private drinksList$ = this.ingredientService.drinksList$;
  private showDrinksList$ = this.ingredientService.showDrinksList$;
  private allIngredients$ = this.mainService.listOfIngredients();

  stream$ = combineLatest([
    this.ingredientDetails$,
    this.showDetails$,
    this.drinksList$,
    this.showDrinksList$,
    this.allIngredients$,
  ]).pipe(
    map(
      ([
        ingredientDetails,
        showDetails,
        drinksList,
        showDrinksList,
        allIngredients,
      ]) => ({
        ingredientDetails,
        showDetails,
        drinksList,
        showDrinksList,
        allIngredients,
      })
    )
  );

  onChange(event: any) {
    this.ingredientService.handleOnChange(event);
  }

  ngOnDestroy() {
    this.ingredientService.unsubscribeDestroy();
  }
}
