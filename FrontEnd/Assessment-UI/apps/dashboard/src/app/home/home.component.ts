import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@workspace/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = [
    {title:"Projects", link: "/projects",},
    
    {icon: "help", title:"Questions", link: "/questions",
    line1: "Add & view questions without the constraint of a quiz",
    line2: "Users can add dynamic number of options"},

    {icon: "dashboard", title:"Quiz", link: "/quiz",
    line1: "Create & view quizes created by teachers from everywhere",
    line2: "Users can create quiz by choosing questions from our pool"},
    
    {icon: "question_answer", title:"Exam", link: '/exam',
    line1: "Give exams, and evaluate your results. Get percentile & scorecard.",
    line2: "Bonus all of the above resources are searchable as well"},
  ]

  currUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUserDetails()
      .subscribe(res => {
        this.currUser = res;
      })
  }

  ngOnInit(): void {
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
