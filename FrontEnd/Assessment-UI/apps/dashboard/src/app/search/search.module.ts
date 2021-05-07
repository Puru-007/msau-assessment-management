import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
