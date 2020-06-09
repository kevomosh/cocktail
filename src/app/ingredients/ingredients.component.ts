import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from '../services/helper.service';
import { MainService } from '../services/main.service';
import { IngredientInfo } from '../views/ingredientInfo';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit, OnDestroy {
  constructor(
    private mainService: MainService,
    private helperService: HelperService
  ) {}
  ingSubject = new Subject<IngredientInfo>();
  private destroy: Subject<void> = new Subject<void>();

  allIngredients$ = this.mainService.listOfIngredients();
  ngOnInit(): void {
    this.helperService.startFirstInputWarning();
  }

  onChange(event: any) {
    if (event) {
      this.helperService.clearFirstInputWarning();
      this.mainService
        .searchIngredientByName(event.ingredient)
        .pipe(takeUntil(this.destroy))
        .subscribe((x) => {
          this.ingSubject.next(x);
        });
    } else {
      this.ingSubject.next();
      this.helperService.startFirstInputWarning();
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
