import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainService } from '../services/main.service';
import { IngredientInfo } from '../views/ingredientInfo';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  constructor(private mainService: MainService) {}
  ingSubject = new Subject<IngredientInfo>();
  private destroy: Subject<void> = new Subject<void>();

  allIngredients$ = this.mainService.listOfIngredients();
  ngOnInit(): void {}

  onChange(event: any) {
    if (event) {
      this.mainService
        .searchIngredientByName(event.ingredient)
        .pipe(takeUntil(this.destroy))
        .subscribe((x) => this.ingSubject.next(x));
    } else {
      this.ingSubject.next();
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
