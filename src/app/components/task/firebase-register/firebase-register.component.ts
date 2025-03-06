import { Component } from '@angular/core';
import { FirebaseAuthService } from '../firebase-signup/firebase-auth.service';

@Component({
  selector: 'app-firebase-register',
  templateUrl: './firebase-register.component.html',
  styleUrls: ['./firebase-register.component.css']
})
export class FirebaseRegisterComponent {
  email : string = '';
  password : string = '';

  constructor(private authservice:FirebaseAuthService){

  }

  register(){
    if(this.email == ''){
      alert("Plz enter the email");
      return;
    }
    if(this.email == ''){
      alert("Plz enter the password");
      return;
    }

    this.authservice.register(this.email,this.password);
    this.email="";
    this.password="";

  }


}
