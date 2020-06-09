import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private _cocktailId$ = new BehaviorSubject<number>(0);

  constructor() {}

  setCocktailId$(newId: number) {
    this._cocktailId$.next(newId);
  }

  clearCocktailId() {
    this._cocktailId$.next(0);
  }

  get cocktailId$() {
    return this._cocktailId$.asObservable();
  }
}
