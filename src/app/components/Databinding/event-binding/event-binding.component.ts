import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  counter: number = 10;
  name: string = "";

  onClick() {
    alert('Button clicked!');
  }

  
  resetCounter() {
    this.counter = this.counter+1;
  } 
}
