import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsService} from './projects/projects.service'
import { UserService } from './user/user.service';
import { QuestionsService } from './questions/questions.service';
import { QuizesService } from './quizes/quizes.service';
import { ExamsService } from './exams/exams.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ProjectsService,
    UserService,
    QuestionsService,
    QuizesService,
    ExamsService
  ],
})
export class CoreDataModule {}
