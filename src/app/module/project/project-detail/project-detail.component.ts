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
      @Inject(MAT_DIALOG_DATA) public data: any , 
      private projectService : ProjectService) {
        let projectDetail = Object.assign({} , this.data);
        this.projectDetail = projectDetail;
        this.projectId = this.projectDetail.id;
      }
      
    onSubmit(){
      if(!this.projectId){
        this.projectService.createNewElement(this.projectDetail).subscribe(
          response => {
            this.dialogRef.close(true);
          }, 
          error => {
            console.log("error");
          }
        );
      } else {
        this.projectService.updateElement(this.projectDetail , this.projectId).subscribe(
          response => {
            this.dialogRef.close(true)
          },
          error => {
            console.log("error");
          }
        )
      }

    }    

    onCancel(){
      this.dialogRef.close(false);
    }

  }