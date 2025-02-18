import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageForChild1 = 'Hello Child 1!';
  messageForChild2 = 'Hello Child 2!';
 

  // Variables to capture messages from children
  child1Message = '';
  child2Message = '';
 

  // Handlers for messages from children
  handleChild1Message(msg: string) {
    this.child1Message = msg;
  }

  handleChild2Message(msg:string){
    this.child2Message = msg;
  }

  
}
