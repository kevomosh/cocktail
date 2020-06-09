import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-random-cocktail',
  templateUrl: './random-cocktail.component.html',
  styleUrls: ['./random-cocktail.component.scss'],
})
export class RandomCocktailComponent implements OnInit {
  constructor(
    private mainService: MainService,
    public activeModal: NgbActiveModal
  ) {}

  randomCocktail$ = this.mainService.getRandomCocktail();

  getAnother() {
    this.randomCocktail$ = this.mainService.getRandomCocktail();
  }

  ngOnInit(): void {}
}
