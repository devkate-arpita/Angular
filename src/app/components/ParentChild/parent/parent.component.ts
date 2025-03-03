import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageForChild1 = 'Hello Child 1!';
 

  // Variables to capture messages from children
  child1Message = '';
 

  // Handlers for messages from children
  handleChild1Message(msg: string) {
    this.child1Message = msg;
  }

 

  
}
