import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../model/Base.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  
  public URL = environment.apiUrl;
  
  constructor(public http: HttpClient) { }

  getAllElement() : Observable<any> {
    return this.http.get(this.URL)
  }


  createNewElement(base : BaseModel) : Observable<any>{
    return this.http.post(this.URL , base);
  }

  updateElement(project : BaseModel , id : number): Observable<any>{
    return this.http.put(`${this.URL}/${id}` , project);
  }

  deleteElement(id : number): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }
}
