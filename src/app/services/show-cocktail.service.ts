import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DrinkInfo } from '../views/drinkInfo';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class ShowCocktailService {
  constructor(private helperService: HelperService) {}

  private _showCocktail = new BehaviorSubject<boolean>(false);
  private _cocktailId$ = new BehaviorSubject<number>(0);
  private _drinksList$ = new BehaviorSubject<DrinkInfo[]>([]);
  private _showDrinksList$ = new BehaviorSubject<boolean>(false);

  displayCocktailCard(event: any) {
    if (event) {
      this.helperService.clearSecondInputWarning();
      this.setCockTailId(event.id);
      this.setShowCockTail(true);
      //this.helperService.setCocktailId$(event.id);
    } else {
      this.clearIdAndShow();
      // this.helperService.clearCocktailId();
      this.helperService.startSecondInputWarning();
    }
  }

  get showCockTail$() {
    return this._showCocktail.asObservable();
  }

  setShowCockTail(value: boolean) {
    this._showCocktail.next(value);
  }

  get cocktailId$() {
    return this._cocktailId$.asObservable();
  }

  setCockTailId(id: number) {
    this._cocktailId$.next(id);
  }

  get drinksList$() {
    return this._drinksList$.asObservable();
  }

  setDrinksList(drinksList: DrinkInfo[]) {
    this._drinksList$.next(drinksList);
  }

  get showDrinksList$() {
    return this._showDrinksList$.asObservable();
  }

  setshowDrinksList(value: boolean) {
    this._showDrinksList$.next(value);
  }

  clearIdAndShow() {
    this.setCockTailId(0);
    this.setShowCockTail(false);
  }

  resetAll() {
    this.setDrinksList([]);
    this.setshowDrinksList(false);
  }
}
