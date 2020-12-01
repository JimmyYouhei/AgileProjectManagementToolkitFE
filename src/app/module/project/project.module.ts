import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MaterialModule } from 'src/app/shared/module/material-module';
import { ProjectDetailDialog } from './project-detail/project-detail.component';

@NgModule({
  declarations: [ProjectComponent , ProjectDetailDialog],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule
  ]
})
export class ProjectModule { }
