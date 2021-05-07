import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsDetailsComponent } from './questions-details/questions-details.component';
import { SearchModule } from '../search/search.module';
@NgModule({
  declarations: [QuestionsComponent, QuestionsListComponent, QuestionsDetailsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MaterialModule,
    FormsModule,
    SearchModule
  ],
  exports: [
    QuestionsComponent
  ]
})
export class QuestionsModule { }
