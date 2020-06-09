import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';

@NgModule({
  declarations: [IngredientsComponent],
  imports: [SharedModule, IngredientsRoutingModule],
})
export class IngredientsModule {}
