import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { InterpolationComponent } from './components/Databinding/interpolation/interpolation.component';
import { EventBindingComponent } from './components/Databinding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/Databinding/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './components/Databinding/two-way-binding/two-way-binding.component';
import { SummaryComponent } from './components/Databinding/summary/summary.component';
import { ProfileComponent } from './components/task/profile/profile.component';
import { TaskComponent } from './components/task/task.component';
import { AdminUserLoginComponent } from './components/task/admin-user-login/admin-user-login.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { StructuralComponent } from './components/directive/structural/structural.component';
import { AttributeComponent } from './components/directive/attribute/attribute.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { DatabindingTask1Component } from './components/Databinding/databinding-task1/databinding-task1.component';

const routes: Routes = [
  {path:'html-css',component:HtmlCssComponent},
  {path:'databinding/interpolation',component:InterpolationComponent},
  {path:'databinding/event-binding',component:EventBindingComponent},
  {path:'databinding/property-binding',component:PropertyBindingComponent},
  {path:'databinding/two-way-binding',component:TwoWayBindingComponent},
  {path:'databinding/summary',component:SummaryComponent},
  {path:'databinding/Task',component:DatabindingTask1Component},

  {
    path: 'task',
    component: TaskComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      {path:'admin-user-login',component:AdminUserLoginComponent}// Child route
    ]
  },
  {path:'task/profile',component:ProfileComponent},
  {path:'task/admin-user-login',component:AdminUserLoginComponent},
  {path:'pipe',component:PipeComponent},
  
  {
    path: 'directive',
    component: DirectiveComponent,
    children: [
      { path: 'structural', component: StructuralComponent },
      {path:'attribute',component:AttributeComponent}
      // Child route
    ]
  },
  
  {path:'directive/structural',component:StructuralComponent},
  {path:'directive/attribute',component:AttributeComponent},
  
  { path: '**', redirectTo: 'task' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
