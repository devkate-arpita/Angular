import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../firebase-signup/firebase-auth.service';
import { Router } from '@angular/router';
import { StudentDataService } from '../student-data.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit{
 
  studentList: Student[] = [];
  studentObj: Student = { id: '', first_name: '', last_name: '', email: '', mobile: '' };
 

 constructor(private router:Router, private data: StudentDataService){}


    

  ngOnInit() {
    this.getAllStudents();
  }

  //  Upload JSON data to Firestore
  uploadJSONToFirestore() {
    this.data.uploadStudentsToFirestore();
  }

  // Fetch all students from Firestore
  getAllStudents() {
    this.data.getAllStudents().subscribe({
      next: (students) => {
        this.studentList = students;
      },
      error: (err) => {
        alert('Error fetching student data');
        console.error('Fetch Error:', err);
      }
    });
  }
  

  // Reset form after add/update
  resetForm() {
    this.studentObj = { id: '', first_name: '', last_name: '', email: '', mobile: '' };
  }

  // Add a new student
  async addStudent() {
    if (!this.studentObj.first_name || !this.studentObj.last_name || !this.studentObj.email || !this.studentObj.mobile) {
      alert('Fill all the fields');
      return;
    }

    try {
      await this.data.addStudent(this.studentObj);
      alert('Student added successfully');
      this.resetForm();
      this.getAllStudents();
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Failed to add student');
    }
  }

  //Update an existing student
  async updateStudent() {
 
    if (!this.studentObj.id) {
      alert('Select a student to update');
      return;
    }

    try {
      await this.data.updateStudent(this.studentObj);
      alert('Student updated successfully');
      this.resetForm();
      this.getAllStudents();
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student');
    }
  }

  // Delete a student
  async deleteStudent(student: Student) {
    if (window.confirm(`Are you sure you want to delete ${student.first_name} ${student.last_name}?`)) {
      try {
        await this.data.deleteStudent(student);
        alert('Student deleted successfully');
        this.getAllStudents();
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Failed to delete student');
      }
    }
  }

  // Populate form when clicking on an existing student (for update)
  editStudent(student: Student) {
    this.studentObj = { ...student };
  }
    
}



//  ngOnInit(){
    //   this.getAllStudents();

    //  }


    //  getAllStudents() {
    //   this.data.getAllStudents().subscribe(
    //     (res) => {
    //       this.studentList = res.map((student) => ({
    //         id: student.id,
    //         first_name: student.first_name,
    //         last_name: student.last_name,
    //         email: student.email,
    //         mobile: student.mobile
    //       }));
    //     },
    //     (err) => {
    //       alert('Error while fetching student data');
    //       console.error('Fetch Error:', err);
    //     }
    //   );
    // }
    
  

    // resetForm(){
    //   this.first_name = '';
    //   this.last_name = '';
    //   this.email= '';
    //   this.mobile= '';
    // }
  
    // addStudent(){
    //   if(this.first_name == '' || this.last_name == '' || this.email == '' || this.mobile == ''){
    //     alert("Fill all the fields");
    //     return;
    //   }
     

    //   const newStudent: Student = {
    //     id: '',
    //     first_name: this.first_name,
    //     last_name: this.last_name,
    //     email: this.email,
    //     mobile: this.mobile
    //   };

    //   this.data.addStudent(newStudent)
    //   .then(() => {
    //     alert('Student added successfully');
    //     this.resetForm();
    //     this.getAllStudents(); 
    //   })
    //   .catch((error) => {
    //     console.error('Error adding student:', error);
    //     alert('Failed to add student');
    //   });
    // }
  
    // updateStudent(){
  
    // }
  
    

    // deleteStudent(student: Student) {
    //   if (window.confirm(`Are you sure you want to delete ${student.first_name} ${student.last_name}?`)) {
    //     this.data.deleteStudent(student)
    //       .then(() => {
    //         alert('Student deleted successfully');
    //         this.getAllStudents(); 
    //       })
    //       .catch((error) => {
    //         console.error('Error deleting student:', error);
    //         alert('Failed to delete student');
    //       });
    //   }
    // }