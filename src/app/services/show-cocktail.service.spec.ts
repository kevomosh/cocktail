import { TestBed } from '@angular/core/testing';

import { ShowCocktailService } from './show-cocktail.service';

describe('ShowCocktailService', () => {
  let service: ShowCocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
