import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';
import { QuizModule } from '../quiz/quiz.module';
import { ExamsDetailsComponent } from './exams-details/exams-details.component';
import { ExamsResultsComponent } from './exams-results/exams-results.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [ExamsComponent, ExamsDetailsComponent, ExamsResultsComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    MaterialModule,
    FormsModule,
    QuizModule,
    ChartModule
  ]
})
export class ExamsModule { }
