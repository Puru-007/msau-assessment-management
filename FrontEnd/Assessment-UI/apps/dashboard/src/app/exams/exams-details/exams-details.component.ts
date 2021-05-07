import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exam } from '@workspace/core-data';

@Component({
  selector: 'app-exams-details',
  templateUrl: './exams-details.component.html',
  styleUrls: ['./exams-details.component.css']
})
export class ExamsDetailsComponent{

  @Input() exam: Exam;
  @Output() evaluate = new EventEmitter();
}
