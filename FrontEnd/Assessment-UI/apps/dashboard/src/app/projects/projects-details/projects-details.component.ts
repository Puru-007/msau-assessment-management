import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project, User } from '@workspace/core-data';
import * as _ from "lodash";

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent {

  selectedProject: Project;

  @Input() set project(value){
    this.selectedProject = _.cloneDeep(value);
  }
  @Input() currUser: User;
  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();
}
