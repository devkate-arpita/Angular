import { Component } from '@angular/core';
import { FirebaseAuthService } from '../firebase-signup/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase-forgotpassword',
  templateUrl: './firebase-forgotpassword.component.html',
  styleUrls: ['./firebase-forgotpassword.component.css']
})
export class FirebaseForgotpasswordComponent {

  email : string = '';

  constructor(private authservice:FirebaseAuthService,private router:Router) {
    
  }

  forgotpassword(){
    this.authservice.forgotPassword(this.email);
    this.email = '';

  }

}
