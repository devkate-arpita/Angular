import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  username='arpita';
  price: number = 100;
  tax: number = 18;

  getCurrentYear() {
    return new Date().getFullYear();
  }

  getTodayDate() {
    return new Date().toDateString();
  }

}  


