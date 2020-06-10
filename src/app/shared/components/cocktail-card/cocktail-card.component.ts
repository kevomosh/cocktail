import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';
import { ShowCocktailService } from 'src/app/services/show-cocktail.service';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent implements OnInit {
  constructor(
    public cocktailService: ShowCocktailService,
    private mainService: MainService
  ) {}

  chosenCocktail$ = this.cocktailService.cocktailId$.pipe(
    switchMap((id) => this.mainService.lookUpCocktailById(id))
  );

  ngOnInit(): void {}
}
