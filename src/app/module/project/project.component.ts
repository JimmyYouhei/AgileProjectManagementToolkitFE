import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDeleteDialog } from 'src/app/shared/component/confirm-delete.component';
import { ConfirmDataModel } from 'src/app/shared/model/confirm-data.model';
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
    public dialog: MatDialog , private snackBar : MatSnackBar) { 
  }

  ngOnInit() {
    this.projectService.getAllElement().subscribe(
      response => {
        this.dataSource.data = response;
      }
    )
  }

  onCreatePopup(){
    const dialogRef = this.dialog.open(ProjectDetailDialog , {

    });

    dialogRef.afterClosed().subscribe(result => {

      this.snackBar.open("Create new project successfully" , null , {
        duration : 3000
      } );
      this.projectService.getAllElement().subscribe(
        response => {
          this.dataSource.data = response;
        }
      )
    })
  }

  onUpdateElement(element : any){
    const dialogRef = this.dialog.open(ProjectDetailDialog , {
      data : element
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        
        this.snackBar.open("Update project successfully" , null , {
        duration : 3000
        });
        this.projectService.getAllElement().subscribe(
          response => {
            this.dataSource.data = response;
          }
        )
      }

    })
  }

  onDeleteElement(element : any){

    const data : ConfirmDataModel = new ConfirmDataModel(this.projectService , element.id ,
       "Are you sure you want to delete the project: " + element.projectName)

    const dialogRef = this.dialog.open( ConfirmDeleteDialog , {
      data : data
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        
        this.snackBar.open("Delete project successfully" , null , {
        duration : 3000
        });
        this.projectService.getAllElement().subscribe(
          response => {
            this.dataSource.data = response;
          }
        )
      }
    })
  }


}
