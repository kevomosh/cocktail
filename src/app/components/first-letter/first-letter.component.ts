import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { MainService } from 'src/app/services/main.service';
import { ShowCocktailService } from 'src/app/services/show-cocktail.service';
import { DrinkInfo } from 'src/app/views/drinkInfo';

@Component({
  selector: 'app-first-letter',
  templateUrl: './first-letter.component.html',
  styleUrls: ['./first-letter.component.scss'],
})
export class FirstLetterComponent implements OnInit, OnDestroy {
  constructor(
    private mainService: MainService,
    public helperService: HelperService,
    private cocktailService: ShowCocktailService
  ) {}

  selectedCocktail: DrinkInfo[] = [];
  private _allCocktail$ = new BehaviorSubject<DrinkInfo[]>([]);

  alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
  private destroy: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.helperService.startFirstInputWarning();
  }

  displayCocktail(event: any) {
    this.cocktailService.displayCocktailCard(event);
  }

  onChange(event: any) {
    if (event) {
      this.mainService
        .getAllCocktailsByFirstLetter(event)
        .pipe(takeUntil(this.destroy))
        .subscribe((x) => {
          this.helperService.finishFirstStartSecondWarning();
          this._allCocktail$.next(x);
        });
    } else {
      this.cocktailService.setShowCockTail(false);

      this.helperService.finishSecondStartFirstWarning();
      this._allCocktail$.next([]);
    }
  }

  get allCocktail$() {
    return this._allCocktail$.asObservable();
  }

  ngOnDestroy() {
    this._allCocktail$.next([]);
    this.cocktailService.clearIdAndShow();
    //this.helperService.clearCocktailId();

    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
