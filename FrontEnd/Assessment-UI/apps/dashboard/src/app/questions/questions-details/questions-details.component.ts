import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '@workspace/core-data';

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css']
})
export class QuestionsDetailsComponent{

  // Since questions can't be changed once made, since added to Quiz already
  // They are shared state here and won't be changing

  @Output() saved = new EventEmitter();
  @Output() addedOption = new EventEmitter();
  @Output() canceled = new EventEmitter();
  @Input() currQuestion: Question;

  /*
    // If want to decouple the states =>
    question: Question;

    @Input() set currQuestion(value){
      this.question = _.cloneDeep(value)
    }

    // Note: replace question appropriately in template

  */
}
