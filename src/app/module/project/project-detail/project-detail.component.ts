import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectModel } from 'src/app/shared/model/project.model';
import { ProjectService } from 'src/app/shared/service/project-service.service';

@Component({
    selector: 'dialog-project-detail',
    templateUrl: 'project-detail.component.html',
  })
  export class ProjectDetailDialog {
    projectId : number;
    projectDetail : ProjectModel = new ProjectModel();
  
    constructor(
      public dialogRef: MatDialogRef<ProjectDetailDialog>,
      @Inject(MAT_DIALOG_DATA) public data: number , 
      private projectService : ProjectService) {
        this.projectId = this.data
      }
      
    onSubmit(){
      console.log("submit")
    }    

  }