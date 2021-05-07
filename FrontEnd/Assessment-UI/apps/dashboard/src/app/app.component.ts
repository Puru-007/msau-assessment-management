import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, User } from '@workspace/core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  currUser: User;

  links  = [{path: '/', icon: 'home', title: 'Home'}];

  constructor(private userService: UserService){};

  ngOnInit(){
    this.userService.getUserDetails()
      .subscribe(res => {
        this.currUser = res;
        this.userService.currUser = this.currUser;
        this.links.push({path: '/projects', icon: 'work', title: 'Projects'});
        this.links.push({path: '/questions', icon: 'help', title: 'Questions'});
        this.links.push({path: '/quiz', icon: 'dashboard', title: 'Quiz'});
        this.links.push({path: '/exam', icon: 'question_answer', title: 'Exam'});
        this.links.push({path: '/.', icon: 'book', title: 'Saved Exams'});
        this.links.push({path: '/.', icon: 'phone', title: 'Contact Us'});
        this.links.push({path: '/.', icon: 'info', title: 'About Us'});
        this.links.push({path: '/.', icon: 'people', title: 'Our Team'});
      });
  }

  logout(){
    console.log("Logging out");
    this.userService.logout()
      .subscribe(res => {
        if(res.status === 200){
          location.reload()
        }
      });
  }
}
