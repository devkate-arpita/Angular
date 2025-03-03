import { Component } from '@angular/core';
import { AuthService } from '../signup/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['task/login-admin-user']);
  }

}
