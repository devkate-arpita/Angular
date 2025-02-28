import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    address: '',
    agree: false
  };

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Form Submitted Successfully!', this.user);
    alert("submitted successfully");
  }
}

