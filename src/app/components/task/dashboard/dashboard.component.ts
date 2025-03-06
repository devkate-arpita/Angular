import { Component } from '@angular/core';
import { FirebaseAuthService } from '../firebase-signup/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authservice:FirebaseAuthService,private router:Router){}

  register(){
    this.authservice.logout();

  }
}
