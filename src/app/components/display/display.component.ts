import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  constructor(
    private helperService: HelperService,
    private mainService: MainService
  ) {}

  chosenCocktail$ = this.helperService.cocktailId$.pipe(
    switchMap((id) => this.mainService.lookUpCocktailById(id))
  );

  ngOnInit(): void {}
}
