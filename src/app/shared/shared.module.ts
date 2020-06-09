import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, NgbModule, NgSelectModule],
  exports: [CommonModule, FormsModule, NgbModule, NgSelectModule],
})
export class SharedModule {}
