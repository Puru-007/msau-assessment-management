import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Quiz, Question } from "@workspace/core-data";
import * as _ from "lodash";

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit, OnChanges {

  @Input() currQuiz: Quiz;
  @Input() allQuestions: Array<Question>;
  @Output() canceled = new EventEmitter();
  @Output() saved = new EventEmitter();

  filteredQuestions: Array<Question>;

  constructor() { }

  ngOnInit(): void {
  }

  // Additional functions for handling questions inside the checkbox
  // only 2 states here => currQuiz and allQuestions
  // And filtered question depends on both of them, so need to update on every change
  ngOnChanges() {
    this.filteredQuestions = _.cloneDeep(this.allQuestions);
  }

  // To check for which questions are already picked by quiz
  checkQuestionExists(question){
    return this.currQuiz.questions.map(i=>i.id).includes(question.id);
  }

  // Filter questions by description
  filterQuestions(event){
    const query = event.target.value.toLowerCase();
    this.filteredQuestions = this.allQuestions.filter(q => q.description.toLowerCase().includes(query));
  }
}
