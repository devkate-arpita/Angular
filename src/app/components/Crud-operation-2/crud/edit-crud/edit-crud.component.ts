import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-crud',
  templateUrl: './edit-crud.component.html',
  styleUrls: ['./edit-crud.component.css']
})
export class EditCrudComponent {

  id!: string ;
  employeeData: any = [];

  constructor(private crudService: CrudService, private route: ActivatedRoute,
    private router:Router
  ) { }

 

ngOnInit(): void {
  this.route.params.subscribe(params => {
          this.id = params['id'];
          console.log('id we get',this.id)

          if(this.id){
            this.getById(this.id);
          }
  })
}



  getById(id: string) {
    this.crudService.getById(id).subscribe({
      next: (data) => {
        this.employeeData = data;
        console.log('Fetched employee data:', this.employeeData);
      },
      error: (err) => {
        console.error('Error fetching employee data:', err);
      }
    });
  }

  onUpdate(){
    if(this.id){
        this.crudService.updateEmployee(this.id,this.employeeData).subscribe({
          next:()=>{
            this.router.navigate(['/crud-operation-2/crud']);
          },error:(err)=>{
           console.log("Error occur while updating",err);
          }
        })
    }
  }
  }
