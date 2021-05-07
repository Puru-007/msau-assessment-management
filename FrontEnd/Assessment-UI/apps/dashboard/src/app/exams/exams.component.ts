import { Component, OnInit } from '@angular/core';
import { Quiz, QuizesService, User, UserService, ExamsService, Exam, Result } from '@workspace/core-data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  allExams: Array<Exam>;
  filteredExam: Array<Exam>;
  selectedExam: Exam;
  currUser: User;
  exam: Exam = null;
  result: Result = null;
  percentile: Number = 0;

  constructor(private userService: UserService,
    private examsService: ExamsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.currUser = this.userService.currUser;
    this.getAllExams();
  }

  getAllExams() {
    this.examsService.getAllExams()
      .subscribe(res => {
        this.allExams = res;
        this.filteredExam = res;
      })
  }

  takeExam(quiz) {
    this.selectedExam = quiz;
    this.examsService.getExam(quiz.id)
      .subscribe(res => {
        this.result = null;
        this.percentile = 0;
        this.exam = res;
        if(res.id == "-1"){
          this._snackBar.open("Can take test only once", null, {duration: 2500});
        }
      })
  }

  checkResult(quiz){
    this.selectedExam = quiz;
    this.examsService.getResult(quiz.id)
      .subscribe(res => {
        this.result = res;
        this.exam = null;
        if(res.score === -1){
          this._snackBar.open("Submit Exam First", null, {duration: 2500});
        }
      })
    this.examsService.getPercentile(quiz.id)
      .subscribe(res => {
        this.percentile = res;
      })
  }

  evaluate(exam: Exam){
    this.examsService.evalExam(exam.id, exam)
      .subscribe(res => {
        console.log(res)
        this.exam = null;
        this.result = null;
        this._snackBar.open("Exam Submitted. Check Results!", null, {duration: 2500});
      })
  }

  searchQuiz(event){
    const query = event.target.value.toLowerCase();
    
    this.filteredExam = this.allExams.filter(q => {
      if(q.title.toLowerCase().includes(query)) return true;
      else if(q.description.toLowerCase().includes(query)) return true;
      return false;
    });
  }
  
}
