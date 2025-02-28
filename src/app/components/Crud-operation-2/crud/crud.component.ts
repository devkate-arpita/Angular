import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  crudData:any=[];

  constructor(private crudService:CrudService){

  }

  ngOnInit(){
    this.getData();

  }

  getData() {
    
    this.crudService.getData().subscribe(
    {
      next: (data) => {
        this.crudData = data;
        console.log('Updated Table Data:', this.crudData);
      }, error: (err) => {
        console.log('Error Occured while Fetching Data', err);
      }
    }
  );
}



onDelete(){
  
}


}
