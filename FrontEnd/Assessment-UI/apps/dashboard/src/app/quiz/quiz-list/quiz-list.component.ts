import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '@workspace/core-data';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {
  @Input() quizes: Array<Quiz>;
  @Output() selected = new EventEmitter();
  @Output() searched = new EventEmitter();
  @Output() takeExam = new EventEmitter();
  @Output() checkResult = new EventEmitter();
}
