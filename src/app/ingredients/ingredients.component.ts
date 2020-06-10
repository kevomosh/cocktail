import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { HelperService } from '../services/helper.service';
import { MainService } from '../services/main.service';
import { DrinkInfo } from '../views/drinkInfo';
import { IngredientInfo } from '../views/ingredientInfo';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;
  constructor(
    private mainService: MainService,
    private helperService: HelperService
  ) {}
  ingSubject = new Subject<IngredientInfo>();
  drinksList$ = new BehaviorSubject<DrinkInfo[]>([]);
  showDrinksList$ = new BehaviorSubject<boolean>(false);
  private ingredientName$ = new BehaviorSubject<string>('');
  private destroy: Subject<void> = new Subject<void>();
  private destroy1: Subject<void> = new Subject<void>();

  allIngredients$ = this.mainService.listOfIngredients();
  ngOnInit(): void {
    this.helperService.startFirstInputWarning();
  }

  showDetails() {
    this.ingredientName$
      .pipe(
        switchMap((name) => this.mainService.searchIngredientByName(name)),
        takeUntil(this.destroy)
      )
      .subscribe((x) => {
        this.showDrinksList$.next(false);
        this.helperService.clearSecondInputWarning();
        this.ingSubject.next(x);
      });
  }

  showListForIngredient() {
    this.showDrinksList$.next(true);
    this.ingredientName$
      .pipe(
        switchMap((name) => this.mainService.getAllByIngredient(name)),
        takeUntil(this.destroy)
      )
      .subscribe((info) => {
        this.drinksList$.next(info);
      });
  }

  onChange(event: any) {
    if (event) {
      this.ingredientName$.next(event.ingredient);
      this.helperService.finishFirstStartSecondWarning();
    } else {
      this.showDrinksList$.next(false);
      this.ingredientName$.next('');
      this.ingSubject.next();
      this.destroy.next();
      this.helperService.finishSecondStartFirstWarning();
    }
  }

  ngOnDestroy() {
    this.destroy.unsubscribe();
  }
}
