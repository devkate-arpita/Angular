import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-user-login',
  templateUrl: './admin-user-login.component.html',
  styleUrls: ['./admin-user-login.component.css']
})
export class AdminUserLoginComponent {
  isAdminLogin = true; // Toggle between Admin & User login
  isLoggedIn = false; // Track login status

  // Default credentials
  adminUsername = 'admin';
  adminPassword = 'admin123';

  userUsername = 'user';
  userPassword = 'user123';

  // User input fields
  enteredUsername = '';
  enteredPassword = '';

  loginMessage = ''; // Stores login status message
  isPasswordVisible = false; // Toggles password visibility

  
  // Function to handle login
  login() {
    if (this.isAdminLogin) {
      // Admin login check
      if (this.enteredUsername === this.adminUsername && this.enteredPassword === this.adminPassword) {
        this.loginMessage = ' Admin Logged In';
        this.isLoggedIn = true;
      } else {
        this.loginMessage = ' Admin Login Failed!';
        this.isLoggedIn = false;
      }
    } else {
      // User login check
      if (this.enteredUsername === this.userUsername && this.enteredPassword === this.userPassword) {
        this.loginMessage = 'User Logged In';
        this.isLoggedIn = true;
      } else {
        this.loginMessage = 'User Login Failed!';
        this.isLoggedIn = false;
      }
    }
  }

  // Function to toggle login mode (Admin ↔ User)
  toggleLoginMode() {
    this.isAdminLogin = !this.isAdminLogin;
    this.loginMessage = '';
    this.enteredUsername = '';
    this.enteredPassword = '';
  }

  // Function to logout
  logout() {
    this.isLoggedIn = false;
    this.enteredUsername = '';
    this.enteredPassword = '';
    this.loginMessage = '';
  }
}
