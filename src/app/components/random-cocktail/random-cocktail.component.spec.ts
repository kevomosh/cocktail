import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCocktailComponent } from './random-cocktail.component';

describe('RandomCocktailComponent', () => {
  let component: RandomCocktailComponent;
  let fixture: ComponentFixture<RandomCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
