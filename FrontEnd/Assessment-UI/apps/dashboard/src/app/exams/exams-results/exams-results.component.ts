import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from '@workspace/core-data';

@Component({
  selector: 'app-exams-results',
  templateUrl: './exams-results.component.html',
  styleUrls: ['./exams-results.component.css']
})
export class ExamsResultsComponent implements OnInit {

  resultExists: Boolean = false;
  
  @Input() percentile: Number;

  res: any = {
    labels: ['correct','incorrect'],
    datasets: [
        {
            data: [1,1],
            backgroundColor: [
                "#FF6384",
                "#36A2EB"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]
        }]    
    };
  
  // Details of current quiz to output to view
  @Input() quiz: Quiz;

  constructor() { }

  ngOnInit(): void {
  }

  // Using results to set data for displaying on chart
  @Input() set result(value){
    if(value.score >= 0){
      this.resultExists = true;
      const changedData = {
        labels: ['correct', 'incorrect'],
        datasets: [
            {
                data: [value.score, value.total - value.score],
                backgroundColor: [
                    "#79ff4d",
                    "#ff4d4d",
                ],
                hoverBackgroundColor: [
                    "#79ff4d",
                    "#ff4d4d",
                ]
             }]
        }

        // Kludge to refresh chart everytime
      this.res = Object.assign({}, changedData);
    }
    else{
      this.resultExists = false;
    }
  }

}
