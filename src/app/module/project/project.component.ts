import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/shared/service/project-service.service';
import { ProjectDetailDialog } from './project-detail/project-detail.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects : any[]

  displayedColumns = [
    'projectName',
    'projectDescription',
    'projectVersion',
    'action'
  ]

  dataSource  = new MatTableDataSource();
  constructor( private projectService : ProjectService , 
    public dialog: MatDialog) { 
  }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(
      response => {
        this.dataSource.data = response;
      }
    )
  }

  onCreatePopup(){
    const dialogRef = this.dialog.open(ProjectDetailDialog , {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("close with the result" + result);
    } )
  }


}
