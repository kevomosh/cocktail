import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { DrinkInfo } from '../views/drinkInfo';
import { IngredientInfo } from '../views/ingredientInfo';
import { HelperService } from './helper.service';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(
    private helperService: HelperService,
    private mainService: MainService
  ) {}
  private _ingredientDetails$ = new BehaviorSubject<IngredientInfo>({});
  private _showIngredientDetails$ = new BehaviorSubject<boolean>(false);
  private _drinksList$ = new BehaviorSubject<DrinkInfo[]>([]);
  private _showDrinksList$ = new BehaviorSubject<boolean>(false);
  private _ingredientName$ = new BehaviorSubject<string>('');
  private destroy: Subject<void> = new Subject<void>();

  showSelectForDrinkList() {
    this._showDrinksList$.next(true);
    this.ingredientName$
      .pipe(
        switchMap((name) => this.mainService.getAllByIngredient(name)),
        takeUntil(this.destroy)
      )
      .subscribe((payload) => {
        this._drinksList$.next(payload);
      });
  }

  showIngredientDetails() {
    this.ingredientName$
      .pipe(
        switchMap((name) => this.mainService.searchIngredientByName(name)),
        takeUntil(this.destroy)
      )
      .subscribe((payload) => {
        this._showIngredientDetails$.next(true);
        this._showDrinksList$.next(false);
        this.helperService.clearSecondInputWarning();
        this._ingredientDetails$.next(payload);
      });
  }

  handleOnChange(event: any) {
    if (event) {
      this._ingredientName$.next(event.ingredient);
      this.helperService.finishFirstStartSecondWarning();
    } else {
      this.helperService.finishSecondStartFirstWarning();
      this._showDrinksList$.next(false);
      this._ingredientName$.next('');
      this._showIngredientDetails$.next(false);
      this._ingredientDetails$.next({});
      this.destroy.next();
    }
  }

  get ingredientName$() {
    return this._ingredientName$.asObservable();
  }

  get showDrinksList$() {
    return this._showDrinksList$.asObservable();
  }

  get drinksList$() {
    return this._drinksList$.asObservable();
  }

  get showIngredientDetails$() {
    return this._showIngredientDetails$.asObservable();
  }

  get ingredientDetails$() {
    return this._ingredientDetails$.asObservable();
  }

  unsubscribeDestroy() {
    this.destroy.unsubscribe();
  }
}
