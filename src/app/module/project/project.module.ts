import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MaterialModule } from 'src/app/shared/module/material-module';
import { ProjectDetailDialog } from './project-detail/project-detail.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteDialog } from 'src/app/shared/component/confirm-delete.component';

@NgModule({
  declarations: [ProjectComponent , ProjectDetailDialog , ConfirmDeleteDialog],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProjectModule { }
