import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    FormsModule,
    SearchModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
