import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-input-warning',
  templateUrl: './input-warning.component.html',
  styleUrls: ['./input-warning.component.scss'],
})
export class InputWarningComponent implements OnInit, OnDestroy {
  @Input() firstWarningMessage: string;
  @Input() secondWarningMessage: string;
  @Input() displayOptions: boolean;

  constructor(
    private helperService: HelperService,
    public ingredientService: IngredientService
  ) {}

  combined$ = combineLatest([
    this.helperService.firstInputWarning,
    this.helperService.secondInputWarning,
  ]).pipe(
    map(([firstWarning, secondWarning]) => ({
      firstWarning,
      secondWarning,
    }))
  );

  ngOnInit(): void {}

  ngOnDestroy() {
    this.helperService.clearFirstInputWarning();
    this.helperService.clearSecondInputWarning();
  }
}
