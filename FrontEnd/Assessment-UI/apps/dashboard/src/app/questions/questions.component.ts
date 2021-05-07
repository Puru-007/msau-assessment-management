import { Component, OnInit } from '@angular/core';
import { Question } from "@workspace/core-data";
import { QuestionsService } from '@workspace/core-data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];
  filteredQuestions: Question[] = [];
  selectedQuestion: Question;

  constructor(private questionService: QuestionsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getQuestions();
    this.resetQuestion();
  }

// Retrieve all questions
  getQuestions() {
    this.questionService.all()
      .subscribe(res => {
        this.questions = res;
        this.filteredQuestions = res;
      })
  }

  // Post query to backend
  // Save selected question
  // Unlike course no edit feature here
  // since once a question is added to quiz and then question is changed can lead to side effects
  createQuestion(question){
    this.questionService.create(question)
      .subscribe(_res => {
        this.getQuestions();
        this.resetQuestion();
        this._snackBar.open("Question Created", null, {duration: 2500});
      })
  }

  // Set selected question
  selectQuestion(question: Question){
    this.selectedQuestion = question;
  }

  // Reset selected question to null question
  resetQuestion(){
    const emptyQuestion : Question = {
      id: null,
      description: "",
      options: [{"data": ""}],
      correctOption: 1
    };
    this.selectQuestion(emptyQuestion);
  }

  // Add option to selected question
  addOption(){
    this.selectedQuestion.options.push({"data": ""});
  }

  // Filter questions through their description
  // Can add custom filtering on based of key events as well here
  searchQuestion(event){
    const query = event.target.value.toLowerCase();
    this.filteredQuestions = this.questions.filter(q => q.description.toLowerCase().includes(query));
  }
}
