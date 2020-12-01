import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-project-detail',
    templateUrl: 'project-detail.component.html',
  })
  export class ProjectDetailDialog {
  
    constructor(
      public dialogRef: MatDialogRef<ProjectDetailDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}  
  }