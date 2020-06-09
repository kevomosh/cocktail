import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstLetterComponent } from './components/first-letter/first-letter.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayComponent } from './components/display/display.component';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, FirstLetterComponent, HomeComponent, DisplayComponent, CocktailCardComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
