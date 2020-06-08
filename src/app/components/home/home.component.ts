import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private mainService: MainService,
    public helperService: HelperService
  ) {}

  ngOnInit(): void {}
}
