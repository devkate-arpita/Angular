import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-task1',
  templateUrl: './databinding-task1.component.html',
  styleUrls: ['./databinding-task1.component.css']
})
export class DatabindingTask1Component {
  user={
    name:'Arpita Devkate',
    email:'abc@gmail.com',
    phone:1234567890,
    age:23
   }
  
   isEditing = false;
   editUser = this.user;
  
   toggleEdit(){
    this.isEditing = !this.isEditing;
    if(!this.isEditing){
      this.user = this.editUser;
    }
   }
  
   cancelEdit(){
    this.isEditing = !this.isEditing;
    if(!this.isEditing){
      this.user = this.editUser;
    }
  
   }
  
  }
  