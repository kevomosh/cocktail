import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { MainService } from 'src/app/services/main.service';
import { DrinkInfo } from 'src/app/views/drinkInfo';

@Component({
  selector: 'app-first-letter',
  templateUrl: './first-letter.component.html',
  styleUrls: ['./first-letter.component.scss'],
})
export class FirstLetterComponent implements OnInit, OnDestroy {
  constructor(
    private mainService: MainService,
    public helperService: HelperService
  ) {}

  selectedCocktails: DrinkInfo[] = [];
  private _allCocktail$ = new BehaviorSubject<DrinkInfo[]>([]);

  selectedLetter = null;

  alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
  private destroy: Subject<void> = new Subject<void>();

  ngOnInit(): void {}

  zChange(event: any) {
    if (event) {
      this.helperService.setCocktailId$(event.id);
    } else {
      this.helperService.clearCocktailId();
    }
  }

  onChange(event: any) {
    this.helperService.clearCocktailId();

    if (event) {
      this.mainService
        .getAllCocktailsByFirstLetter(event)
        .pipe(takeUntil(this.destroy))
        .subscribe((x) => {
          this._allCocktail$.next(x);
        });
    } else {
      this._allCocktail$.next([]);
    }
  }

  get allCocktail$() {
    return this._allCocktail$.asObservable();
  }

  ngOnDestroy() {
    this._allCocktail$.next([]);
    this.helperService.clearCocktailId();

    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
