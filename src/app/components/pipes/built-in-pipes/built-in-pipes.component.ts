import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent {
  today:Date=new Date();
  msg:string='Angular pipe';
  value:number=1000;
  amount:number=12142.45223;
  percentage:number=0.45;
  
}
