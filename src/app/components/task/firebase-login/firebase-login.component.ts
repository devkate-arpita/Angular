import { Component } from '@angular/core';
import { FirebaseAuthService } from '../firebase-signup/firebase-auth.service';

@Component({
  selector: 'app-firebase-login',
  templateUrl: './firebase-login.component.html',
  styleUrls: ['./firebase-login.component.css']
})
export class FirebaseLoginComponent {
  email : string = '';
  password : string = '';

  constructor(private authservice:FirebaseAuthService) {
    
  }

  login(){
    // if(this.email == ''){
    //   alert("Plz enter the email");
    //   return;
    // }
    // if(this.email == ''){
    //   alert("Plz enter the password");
    //   return;
    // }

    this.authservice.login(this.email,this.password);
    this.email='';
    this.password='';

  }

}
