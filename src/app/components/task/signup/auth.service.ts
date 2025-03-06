import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http:HttpClient) {    
  }

  signUp(user:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,user);
  }

  login(email:string,password:string){
    return this.http.get<any>(this.apiUrl);
  }

  getUserRole(): string {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : '';
  }

  logout() {
    localStorage.removeItem('user');
}
}
