import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [QuizComponent, QuizListComponent, QuizDetailsComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MaterialModule,
    FormsModule,
    SearchModule
  ],
  exports: [
    QuizListComponent
  ]
})
export class QuizModule { }
