import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent {
  msgToChild1 = "Hello child 1";    //msg to child1


  child1msg = "";

  handleChild1msg(msg:string){
    this.msgToChild1=msg;

  }

}
