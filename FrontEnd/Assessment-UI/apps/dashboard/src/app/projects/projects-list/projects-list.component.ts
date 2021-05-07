import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project, User } from '@workspace/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  @Input() projects: Array<Project>
  @Input() currUser: User;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() searched = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
