import { Component } from '@angular/core';
import { AuthService } from '../signup/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  user:any;

  constructor(private authservices:AuthService, private router:Router){
    const userData = localStorage.getItem('user');
    this.user = userData? JSON.parse(userData):null;

  }

  logout(){
    this.authservices.logout();
    this.router.navigate(['task/login-admin-user']);
  }

}
