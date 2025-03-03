import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
    name = '';
    counter: number = 0;
    selectedColor: string = "red";

    increase() {
      this.counter++;
    }
  
    decrease() {
      this.counter--;
    }
}
