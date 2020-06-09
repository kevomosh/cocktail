import { Component, Input, OnInit } from '@angular/core';
import { DrinkInfo } from 'src/app/views/drinkInfo';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent implements OnInit {
  @Input() cocktail: DrinkInfo;

  constructor() {}

  ngOnInit(): void {}
}
