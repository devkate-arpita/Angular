import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Input() message!: string;
  @Output() messageEvent = new EventEmitter <string>();

  sendMessageToParent() {
    this.messageEvent.emit('Hi Parent, from Child 2!');
  }
 
}
