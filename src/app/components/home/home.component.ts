import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from 'src/app/services/helper.service';
import { RandomCocktailComponent } from '../random-cocktail/random-cocktail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public helperService: HelperService
  ) {}

  ngOnInit(): void {}

  open() {
    this.modalService.open(RandomCocktailComponent, { size: 'xl' });
  }
}
