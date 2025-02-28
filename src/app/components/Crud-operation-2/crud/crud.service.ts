import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  private url:string="http://localhost:3000/"

  constructor(private http:HttpClient) {
    }

    getData():Observable<any>{
      return this.http.get(this.url+'EmployeeData');
     }

     getById(id:string){
        return this.http.get(`${this.url}EmployeeData/${id}`);
     }

     updateEmployee(id: string, data: any): Observable<any> {
      return this.http.put(`${this.url}EmployeeData/${id}`, data);
    }
    
}
