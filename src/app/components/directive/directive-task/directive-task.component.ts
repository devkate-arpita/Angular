import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css']
})
export class DirectiveTaskComponent {
  user=[
    {name:'arpita',status:'active'},
    {name:'anuja',status:'inactive'},
    {name:'rutuja',status:'active'}
  ];
}
