import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectBaseURL = environment.apiUrl+ "project"

  constructor(private http: HttpClient) { }

  getAllProject() : Observable<any> {
    return this.http.get(this.projectBaseURL)
  }


  createNewProject(project : ProjectModel) : Observable<any>{
    return this.http.post(this.projectBaseURL , project);
  }

}
