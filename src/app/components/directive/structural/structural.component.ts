import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  isVisible = true;
  isLoggedIn=true;
  items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes'];

  color: string = 'red'; // Default selected color

  // Optional: Function to change color dynamically (if needed)
  changeColor(newColor: string) {
    this.color = newColor;
    
  }

}
