import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RandomCocktailComponent } from '../random-cocktail/random-cocktail.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isMenuCollapsed = true;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(RandomCocktailComponent, { size: 'xl' });
  }
}
