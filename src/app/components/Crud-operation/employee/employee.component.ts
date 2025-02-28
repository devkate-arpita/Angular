import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
   department:any[]=[];
   employelist:any[]=[];
  //deptId: any;
  isListView:boolean=true;

  employeeObject:any={
    "firstname":"",
    "lastname":"",
    "department":"",
    "departmentId":"",
    "email":"",
    "phoneno":""
  }

  constructor(private http:HttpClient){
  
  }
  
    ngOnInit(): void {
      this.loadDepartment();
      this.loademployee();
      
    }
  
    loadDepartment(){
        this.http.get("assets/department.json").subscribe((res:any)=>{
        
        this.department=res.data;
      })
    }
  
    loademployee(){
      this.http.get("assets/getemployee.json").subscribe((res:any)=>{
       // debugger;
        this.employelist=res.data;
      })

    }

    onCreateEmp(){
      this.employelist.push({ ...this.employeeObject }); // Add the new employee to the list
  alert("Employee added successfully!");
    }

    onEdit(item:any){
      debugger;
      this.employeeObject=item;
      this.isListView=false;
    }

    onDelete(employee: any){
      this.employelist = this.employelist.filter(emp => emp.departmentId !== employee.departmentId);
      alert("Employee deleted successfully!");
    }
    

}
