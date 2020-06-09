import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { FirstLetterComponent } from './components/first-letter/first-letter.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { RandomCocktailComponent } from './components/random-cocktail/random-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLetterComponent,
    HomeComponent,
    DisplayComponent,
    NavComponent,
    RandomCocktailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
