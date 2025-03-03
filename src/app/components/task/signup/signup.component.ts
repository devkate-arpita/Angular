import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user={
    name:'',
    email:'',
    password:'',
    role:'user'
  };

  isSignedUp = false;

  constructor(private authservice:AuthService,private router:Router){

  }
  signUp(){
    this.authservice.signUp(this.user).subscribe(()=>{
      alert("signup successfully");
      this.isSignedUp=true;
      setTimeout(() => {
        this.router.navigate(['task/login-admin-user']);
      }, 2000);
     
    });
    
  }

  goToLogin() {
    this.router.navigate(['task/login-admin-user']);
  }


}
