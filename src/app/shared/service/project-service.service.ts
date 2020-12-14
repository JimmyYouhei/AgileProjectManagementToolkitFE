import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectModel } from '../model/project.model';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends  BaseService{

  public URL = environment.apiUrl+ "project"

  testError() : Observable<any>{
    return this.deleteElement(0);
  }



}
