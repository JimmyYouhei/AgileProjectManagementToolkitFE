import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private getAllProjectURL = environment.apiUrl+ "project"

  constructor(private http: HttpClient) { }

  getAllProject() : Observable<any> {
    return this.http.get(this.getAllProjectURL)
  }

}
