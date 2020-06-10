import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IngredientInfo } from '../views/ingredientInfo';
import { HelperService } from './helper.service';
import { MainService } from './main.service';
import { ShowCocktailService } from './show-cocktail.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(
    private helperService: HelperService,
    private mainService: MainService,
    private cocktailService: ShowCocktailService
  ) {}
  private _ingredientDetails$ = new BehaviorSubject<IngredientInfo>({});
  private _showIngredientDetails$ = new BehaviorSubject<boolean>(false);
  private _ingredientName$ = new BehaviorSubject<string>('');
  private destroy: Subject<void> = new Subject<void>();

  resetAll() {
    this.setIngredientName('');
    this.setShowIngredientsDetails(false);
    this.setIngredientDetails({});
    this.destroy.next();
  }

  showSelectForDrinkList() {
    this.cocktailService.setshowDrinksList(true);
    this.ingredientName$
      .pipe(
        switchMap((name) => this.mainService.getAllByIngredient(name)),
        takeUntil(this.destroy)
      )
      .subscribe((payload) => {
        this.cocktailService.setDrinksList(payload);
      });
  }

  showIngredientDetails() {
    this.ingredientName$
      .pipe(
        switchMap((name) => this.mainService.searchIngredientByName(name)),
        takeUntil(this.destroy)
      )
      .subscribe((payload) => {
        this.setShowIngredientsDetails(true);
        this.cocktailService.setshowDrinksList(false);
        this.helperService.clearSecondInputWarning();
        this.setIngredientDetails(payload);
      });
  }

  handleOnChange(event: any) {
    if (event) {
      this.setIngredientName(event.ingredient);
      this.helperService.finishFirstStartSecondWarning();
    } else {
      this.helperService.finishSecondStartFirstWarning();
      this.cocktailService.setshowDrinksList(false);
      this.resetAll();
    }
  }

  get ingredientName$() {
    return this._ingredientName$.asObservable();
  }

  get showIngredientDetails$() {
    return this._showIngredientDetails$.asObservable();
  }

  get ingredientDetails$() {
    return this._ingredientDetails$.asObservable();
  }

  setIngredientName(name: string) {
    this._ingredientName$.next(name);
  }

  setShowIngredientsDetails(value: boolean) {
    this._showIngredientDetails$.next(value);
  }

  setIngredientDetails(ingredient: IngredientInfo) {
    this._ingredientDetails$.next(ingredient);
  }
  unsubscribeDestroy() {
    this.destroy.unsubscribe();
  }
}
