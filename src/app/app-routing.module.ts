import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CustomDirectiveComponent } from './components/directive/custom-directive/custom-directive.component';
import { BuiltInPipesComponent } from './components/pipe/built-in-pipes/built-in-pipes.component';
import { CustomPipeComponent } from './components/pipe/custom-pipe/custom-pipe.component';
import { ParentComponent } from './components/ParentChild/parent/parent.component';
import { Child1Component } from './components/ParentChild/parent/child1/child1.component';
import { Child2Component } from './components/ParentChild/parent/child2/child2.component';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { LoginFormComponent } from './components/HTML -CSS/login-form/login-form.component';
import { HomeComponent } from './components/HTML -CSS/login-form/home/home.component';
import { LoginComponent } from './components/HTML -CSS/login-form/login/login.component';
import { RegistrationComponent } from './components/HTML -CSS/login-form/registration/registration.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { DirectiveTaskComponent } from './components/directive/directive-task/directive-task.component';

const routes: Routes = [
  //Databinding
  {path:'databinding/interpolation',component:InterpolationComponent},
  {path:'databinding/event-binding',component:EventBindingComponent},
  {path:'databinding/property-binding',component:PropertyBindingComponent},
  {path:'databinding/two-way-binding',component:TwoWayBindingComponent},
  {path:'databinding/summary',component:SummaryComponent},
  {path:'databinding/Task',component:DatabindingTask1Component},


  //DailyTTask
  {
    path: 'task',
    component: TaskComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      {path:'admin-user-login',component:AdminUserLoginComponent},
    ]
  },
  {path:'task/profile',component:ProfileComponent},
  {path:'task/admin-user-login',component:AdminUserLoginComponent},
  {path:'pipe',component:PipeComponent},
  

  //Directive
  {
    path: 'directive',
    component: DirectiveComponent,
    children: [
      { path: 'structural', component: StructuralComponent },
      {path:'attribute',component:AttributeComponent},
      {path:'custom-directive',component:CustomDirectiveComponent},
      {path:'directive-task',component:DirectiveTaskComponent}
      // Child route
    ]
  },
  
  {path:'directive/structural',component:StructuralComponent},
  {path:'directive/attribute',component:AttributeComponent},
  {path:'directive/custom-directive',component:CustomDirectiveComponent},
  {path:'directive/directive-task',component:DirectiveTaskComponent},


  //Pipe
  {
    path:'pipe',
    component:PipeComponent,
    children:[
      {path:'built-in-pipes',component:BuiltInPipesComponent},
      {path:'custom-pipe',component:CustomPipeComponent}
    ]
  },

  {path:'pipe/built-in-pipes',component:BuiltInPipesComponent},
  {path:'pipe/custom-pipe',component:CustomPipeComponent},


  //Parent-child
  {
    path:'parentChild/parent',
    component:ParentComponent,
    children:[
      {path:'child1',component:Child1Component},
      {path:'child2',component:Child2Component}
    ]
  },

  {path:'parentChild/parent/child1',component:Child1Component},
  {path:'parentChild/parent/child2',component:Child2Component},


  //HTML-CSS
  {
    path:'HTML-CSS/login-form',
    component:LoginFormComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'registration',component:RegistrationComponent}
    ]
  },
  {path:'HTML-CSS/login-form/home',component:HomeComponent},
  {path:'HTML-CSS/login-form/login',component:LoginComponent},
  {path:'HTML-CSS/login-form/registration',component:RegistrationComponent},

  //angular-material
  {path:'angular-material',component:AngularMaterialComponent},

  //hooks
//  {path:"hooks/child",component:ChildComponent},

 //hooks-lifecycle
//  {
//   path:'hooks-lifecycle/parent-hooks',
//   component:ParentComponent,
//   children:[
//     {path:'child-hooks',component:ChildHooksComponent},
//     //{path:'child2',component:Child2Component}
//   ]
// },

// {path:'parentChild/parent-hooks/child-hooks',component:ChildHooksComponent},
//{path:'parentChild/parent/child2',component:Child2Component},


{ path: '**', redirectTo: 'task' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
