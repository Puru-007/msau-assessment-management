import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService, Project, User, UserService } from '@workspace/core-data';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  currUser: User;
  projects: Project[];
  filteredProjects: Project[];
  selectedProject: Project;

  constructor(private projectService: ProjectsService, private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.currUser = this.userService.currUser;
    this.getProjects();
    this.resetProject();
  }

  getProjects() {
    this.projectService.all()
      .subscribe(res => {
        this.projects = res;
        this.filteredProjects = res;
      })
  }

  deleteProject(project){
    this.projectService.delete(project)
      .subscribe(_res => {
        this.resetProject();
        this.getProjects();
        this._snackBar.open("Course Deleted", null, {duration: 2500});
      });
  }

  selectProject(project){
    this.selectedProject = project;
  }

  resetProject(){
    const emptyProject : Project = {
      id: null,
      title: "",
      description: "",
      user: null,
    };
    this.selectProject(emptyProject);
  }

  cancel(){
    this.resetProject();
  }

  saveProject(project){
    project.id ? this.updateProject(project) : this.createProject(project);
  }

  createProject(project){
    this.projectService.create(project)
      .subscribe(_res => {
        this.getProjects();
        this.resetProject();
        this._snackBar.open("Course Created", null, {duration: 2500});
      })
  }

  updateProject(project){
    this.projectService.update(project)
      .subscribe(_res => {
        this._snackBar.open("Course Updated", null, {duration: 2500});
        this.getProjects();
        this.resetProject();
      })
  }

  // Filter projects through their description or title
  // Can add custom filtering on based of key events as well here
  searchedProject(event){
    const query = event.target.value.toLowerCase();
    this.filteredProjects = this.projects.filter(q => q.title.toLowerCase().includes(query) || q.description.toLowerCase().includes(query));
  }

}
