import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/shared/service/project-service.service';

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
  constructor( private projectService : ProjectService) { 
  }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(
      response => {
        this.dataSource.data = response;
      }
    )
  }

}
