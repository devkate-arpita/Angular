import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private auth:Auth,private router:Router) {
    
   }

  //  login(email:string,password:string){
  //   this signInWithEmailAndPassword(this.auth,email,password)
  //  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  
}
