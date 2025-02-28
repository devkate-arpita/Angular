import { Component } from '@angular/core';

@Component({
  selector: 'app-hooks-parent',
  templateUrl: './hooks-parent.component.html',
  styleUrls: ['./hooks-parent.component.css']
})
export class HooksParentComponent {
  value:string = '121';
  isRemove:boolean = false;
 
   onBtnClicked(val:string){
    this.value = val;
   }
 
 
 
   destroyChild(){
    this.isRemove = !this.isRemove;
   }
 }