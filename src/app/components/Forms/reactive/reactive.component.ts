import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  userform:FormGroup = new FormGroup({
    id:new FormControl('0'),
    name:new FormControl('', Validators.required),
    username:new FormControl('',[Validators.required, Validators.minLength(4)]),
    email:new FormControl('',[Validators.required, Validators.email])
  });


  //userForm: FormGroup; 

  //constructor(private fb: FormBuilder) {                            
  //    use of FormBuilder 
    //this.userForm = this.fb.group({
  //    name: ['', Validators.required],  
  //    username: ['', [Validators.required, Validators.minLength(4)]],  
  //    email: ['', [Validators.required, Validators.email]],  
  //  });

  saveUser() {
    if (this.userform.valid) {
      console.log('User Data:', this.userform.value);
      alert('User saved successfully!');
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
