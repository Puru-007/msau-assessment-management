import { Component, OnInit } from '@angular/core';
import { Quiz, QuizesService, Question, QuestionsService } from '@workspace/core-data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  allQuizes: Array<Quiz>;
  filteredQuiz: Array<Quiz>;
  selectedQuiz: Quiz;

  // Independent list of questions to pick from, to add to quiz
  allQuestions: Array<Question>

  constructor(private quizesService: QuizesService,
    private questionService: QuestionsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllQuizes()
    this.resetQuiz()
    this.questionService.all()
    .subscribe(res => this.allQuestions = res);
  }

  getAllQuizes() {
    this.quizesService.all()
      .subscribe(res => {
        this.allQuizes = res;
        this.filteredQuiz = res;
      })
  }

  createQuiz(quiz){
    this.quizesService.create(quiz)
      .subscribe(_res => {
        this.getAllQuizes();
        this.resetQuiz();
        this._snackBar.open("Quiz Created", null, {duration: 2500});
      })
  }

  selectQuiz(quiz){
    this.selectedQuiz = quiz;
  }

  resetQuiz(){
    const emptyQuiz : Quiz = {
      id: null,
      title: "",
      description: "",
      questions: [],
    };
    this.selectQuiz(emptyQuiz);
  }

  // Searching in title and description
  searchQuiz(event){
    const query = event.target.value.toLowerCase();
    
    this.filteredQuiz = this.allQuizes.filter(q => {
      if(q.title.toLowerCase().includes(query)) return true;
      else if(q.description.toLowerCase().includes(query)) return true;
      return false;
    });
  }

  // Custom function to generate quiz
  // Can't use ngModel here, since using custom model, which is dynamic
  submitQuiz(quiz){
    // create quiz here
    const newQuiz: Quiz = {
      id: this.selectedQuiz.id,
      title: quiz.target[0].value,
      description: quiz.target[1].value,
      questions: []
    };

    // Add questions
    for(let i=3; i<quiz.target.length-2; i++){
      if(quiz.target[i].checked) newQuiz.questions.push(this.createQuestion(quiz.target[i].value));
    }

    this.createQuiz(newQuiz);
  }

  // Helper function to generate question for submiting quiz
  createQuestion(id){
    const ques: Question = {
      id: id,
      options: null,
      correctOption: null,
      description: null,
    }
    return ques;
  }
}