import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() message!: string;
  @Output() messageEvent = new EventEmitter <string>();

  sendMessageToParent() {
    this.messageEvent.emit('Hi Parent, from Child 1!');
  }
}
