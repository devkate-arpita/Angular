import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, Query, query, setDoc } from '@angular/fire/firestore';
import { Student } from './student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  //firestore: Firestore | undefined;

  constructor( private firestore:Firestore,private http:HttpClient) { }

  //Fetch students from local JSON file
  getStudentsFromJSON(): Observable<Student[]> {
    return this.http.get<Student[]>('assets/student.json');
  }

  // createTask(task: any) {
  //   return this.http.post<{ name: string }>(
  //     'https://user-management-326b7-default-rtdb.firebaseio.com/task.json',
  //     task
  //   );
  // }



  async uploadStudentsToFirestore() {
    const studentsCollection = collection(this.firestore, 'students');

    this.getStudentsFromJSON().subscribe(async (students) => {
      for (let student of students) {
        const newDocRef = await addDoc(studentsCollection, student); // Add student
        student.id = newDocRef.id; // Update the ID
        await setDoc(newDocRef, student); // Save student with ID
      }
      console.log('JSON data uploaded to Firestore successfully!');
    });
  }

  //  Fetch all students from Firestore
  getAllStudents(): Observable<Student[]> {
    const studentsCollection = collection(this.firestore, 'students');
    return collectionData(studentsCollection, { idField: 'id' }) as Observable<Student[]>;
  }

  //  Add a new student
  async addStudent(student: Student): Promise<void> {
    const studentsCollection = collection(this.firestore, 'students');
    const newDocRef = await addDoc(studentsCollection, student);
    student.id = newDocRef.id;
    await setDoc(newDocRef, student);
  }

  //Update student
  async updateStudent(student: Student): Promise<void> {
    if (!student.id) throw new Error('Student ID is required for update.');
    const studentDocRef = doc(this.firestore, `students/${student.id}`);
    await setDoc(studentDocRef, student, { merge: true });
  }

  // Delete student
  async deleteStudent(student: Student): Promise<void> {
    if (!student.id) throw new Error('Student ID is required for deletion.');
    const studentDocRef = doc(this.firestore, `students/${student.id}`);
    await deleteDoc(studentDocRef);
  }  

}

//  //add student
//   addStudent(student: Student) {
//     const studentCollection = collection(this.fs, 'students'); 
//     const newDocRef = doc(studentCollection); 
//     student.id = newDocRef.id; 
  
//     const studentData = {
//       id: student.id || '',
//       first_name: student.first_name || '',
//       last_name: student.last_name || '',
//       email: student.email || '',
//       mobile: student.mobile || ''
//     };
  
//     return setDoc(newDocRef, studentData);
//   }
  

//  //get all students
//  getAllStudents(): Observable<Student[]> {
//   const studentCollection = collection(this.fs, 'students'); 
//   const studentQuery: Query = query(studentCollection); 
//   return collectionData(studentQuery, { idField: 'id' }) as Observable<Student[]>; 
// }


// //deleteStudent
//   deleteStudent(student: Student) {
//     const studentDocRef = doc(this.fs, `students/${student.id}`);
//     return deleteDoc(studentDocRef)
//       .then(() => {
//         console.log(`Student ${student.id} deleted successfully`);
//       })
//       .catch((error) => {
//         console.error('Error deleting student:', error);
//       });
//   }
  
  
//     //update student
//   updateStudent(student: Student) {
//     const studentDocRef = doc(this.fs, `students/${student.id}`);
//     return setDoc(studentDocRef, student, { merge: true }); // ✅ Updates without deleting
//   }
  







  
