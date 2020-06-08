import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DrinkInfo } from '../views/drinkInfo';
import { IngredientInfo } from '../views/ingredientInfo';
import { IngMeasurementInfo } from '../views/ngMeasurementInfo';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient, private helperService: HelperService) {}
  private BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

  getAllByIngredient(ingredient: string): Observable<DrinkInfo[]> {
    return this.http
      .get<{ drinks: DrinkInfo[] }>(
        `${this.BASE_URL}/filter.php?i=` + ingredient
      )
      .pipe(map((x) => x.drinks.map((each) => this.convertToDrinkInfo(each))));
  }

  getAllWithCategory(category: string): Observable<DrinkInfo[]> {
    return this.http
      .get<any>(`${this.BASE_URL}/filter.php?c=` + category)
      .pipe(map((x) => x.drinks.map((each) => this.convertToDrinkInfo(each))));
  }

  getAllByAlcoholic(alc: string): Observable<DrinkInfo[]> {
    return this.http
      .get<{ drinks: DrinkInfo[] }>(`${this.BASE_URL}/filter.php?a=` + alc)
      .pipe(map((x) => x.drinks.map((each) => this.convertToDrinkInfo(each))));
  }

  listOfCategories$(): Observable<DrinkInfo[]> {
    return this.http
      .get<{ drinks: [{ strCategory: string }] }>(
        `${this.BASE_URL}/list.php?c=list`
      )
      .pipe(map((x) => x.drinks.map((each) => this.convertCategory(each))));
  }

  listOfIngredients(): Observable<DrinkInfo[]> {
    return this.http
      .get<{ drinks: [{ strIngredient1: string }] }>(
        `${this.BASE_URL}/list.php?i=list`
      )
      .pipe(map((x) => x.drinks.map((each) => this.convertIngredient(each))));
  }

  listOfTypes(): Observable<DrinkInfo[]> {
    return this.http
      .get<any>(`${this.BASE_URL}/list.php?a=list`)
      .pipe(map((x) => x.drinks.map((each) => this.convertType(each))));
  }

  getRandomCocktail(): Observable<DrinkInfo> {
    return this.http
      .get<any>(`${this.BASE_URL}/random.php`)
      .pipe(map((x) => this.convertToDrinkInfoWithIngredients(x.drinks[0])));
  }

  getAllCocktailsByFirstLetter(letter: string): Observable<DrinkInfo[]> {
    return this.http
      .get<any>(`${this.BASE_URL}/search.php?f=` + letter)
      .pipe(map((all) => all.drinks.map((x) => this.convertToDrinkInfo(x))));
  }

  lookUpCocktailById(id: number) {
    return this.http
      .get<any>(`${this.BASE_URL}/lookup.php?i=` + id)
      .pipe(map((x) => this.convertToDrinkInfoWithIngredients(x.drinks[0])));
  }

  searchIngredientByName(ingredient: string): Observable<IngredientInfo> {
    return this.http
      .get<any>(`${this.BASE_URL}/search.php?i=` + ingredient)
      .pipe(map((x) => this.convertIngredientInfo(x.ingredients[0])));
  }

  private convertIngredientInfo(info: any): IngredientInfo {
    return {
      ingedientId: info.idIngredient,
      name: info.strIngredient,
      description: info.strDescription,
      abv: info.strABV,
    };
  }

  private convertType(info: any) {
    return {
      type: info.strAlcoholic,
    };
  }

  private convertIngredient(info: any): DrinkInfo {
    return {
      ingredient: info.strIngredient1,
    };
  }

  private convertToDrinkInfo(info: any): DrinkInfo {
    return {
      id: info.idDrink,
      name: info.strDrink,
    };
  }

  private convertCategory(info: any): DrinkInfo {
    return {
      category: info.strCategory,
    };
  }

  private convertToDrinkInfoWithIngredients(info: any): DrinkInfo {
    const combined: IngMeasurementInfo[] = [];
    let i = 1;
    while (i < 15) {
      const u = info['strIngredient' + i];
      if (u) {
        const m = info['strMeasure' + i];
        combined.push({
          ingredient: u,
          measurement: m ? m : 'As you see fit',
        });

        i++;
      } else {
        break;
      }
    }

    const refactored: DrinkInfo = {
      id: info.idDrink,
      picUrl: info.strDrinkThumb,
      name: info.strDrink,
      ingredientMeasurement: combined,
      category: info.strCategory,
      type: info.strAlcoholic,
      glass: info.strGlass,
      instructions: info.strInstructions,
    };

    return refactored;
  }
}
