import { Component } from '@angular/core';
import { FirebaseAuthService } from '../firebase-signup/firebase-auth.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // studentList: Student[] = [];
  // id:string='';
  // first_name:string='';
  // last_name:string='';
  // email:string='';
  // mobile:string=''

  constructor(private authservice:FirebaseAuthService,private router:Router, private data: StudentDataService){}

  register(){
    this.authservice.logout();

  }

  // getAllStudents(){
  //   this.data.getAllStudents().subscribe(res=>{
  //     this.studentList =res.map(e=>{
  //       const data =  e.playload.doc.data();
  //       data.id = e.playload.doc.id;
  //       return data;
  //     })
  //   },err=>{
  //     alert("Error while fetching student data");
  //   })

  // }

  // addStudent(){

  // }

  // updateStudent(){

  // }

  // deleteStudent(student:Student){
  //   if(window.confirm("Are you sure you want to delete"+student.first_name+''+student.last_name+'?')){
  //     this.data.deleteStudent(student);
  //   }
  // }
}
