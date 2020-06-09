import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DrinkInfo } from 'src/app/views/drinkInfo';

@Component({
  selector: 'app-cocktail-info',
  templateUrl: './cocktail-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cocktail-info.component.scss'],
})
export class CocktailInfoComponent {
  @Input() cocktail: DrinkInfo;
}
