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
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { LoginFormComponent } from './components/HTML -CSS/login-form/login-form.component';
import { HomeComponent } from './components/HTML -CSS/login-form/home/home.component';
import { LoginComponent } from './components/HTML -CSS/login-form/login/login.component';
import { RegistrationComponent } from './components/HTML -CSS/login-form/registration/registration.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { DirectiveTaskComponent } from './components/directive/directive-task/directive-task.component';
import { HooksParentComponent } from './components/hooks/hooks-parent/hooks-parent.component';
import { ReactiveComponent } from './components/Forms/reactive/reactive.component';
import { FormsTaskComponent } from './components/Forms/forms-task/forms-task.component';
import { TemplateDrivenComponent } from './components/Forms/template-driven/template-driven.component';
import { EmployeeComponent } from './components/Crud-operation/employee/employee.component';
import { CrudComponent } from './components/Crud-operation-2/crud/crud.component';
import { EditCrudComponent } from './components/Crud-operation-2/crud/edit-crud/edit-crud.component';
import { LocalstorageComponent } from './components/Crud-operation-2/localstorage/localstorage.component';
import { SignupComponent } from './components/task/signup/signup.component';
import { LoginAdminUserComponent } from './components/task/login-admin-user/login-admin-user.component';
import { AdminDashboardComponent } from './components/task/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/task/user-dashboard/user-dashboard.component';
import { FirebaseSignupComponent } from './components/task/firebase-signup/firebase-signup.component';
import { FirebaseRegisterComponent } from './components/task/firebase-register/firebase-register.component';
import { DashboardComponent } from './components/task/dashboard/dashboard.component';

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
  {path:'task/signup',component:SignupComponent},
  {path:'task/login-admin-user',component:LoginAdminUserComponent},
  {path:'task/admin-dashboard',component:AdminDashboardComponent},
  {path:'task/user-dashboard',component:UserDashboardComponent},
  {path:'task/firebase-signup',component:FirebaseSignupComponent},
  {path:'task/firebase-register',component:FirebaseRegisterComponent},
  {path:'task/dashboard',component:DashboardComponent},
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
  // {
  //   path:'pipe',
  //   component:PipeComponent,
  //   children:[
  //     {path:'built-in-pipes',component:BuiltInPipesComponent},
  //     {path:'custom-pipe',component:CustomPipeComponent}
  //   ]
  // },
  
  {path:'pipes/built-in-pipes',component:BuiltInPipesComponent},
  {path:'pipes/custom-pipe',component:CustomPipeComponent},


  //Parent-child
  {
    path:'parentChild/parent',
    component:ParentComponent,
    children:[
      {path:'child1',component:Child1Component},
    ]
  },

  {path:'parentChild/parent/child1',component:Child1Component},


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
{path:'hooks/parent',component:HooksParentComponent},

//forms
{path:"forms/reactive",component:ReactiveComponent},
{path:"forms/forms-task",component:FormsTaskComponent},
{path:"forms/template-driven",component:TemplateDrivenComponent},

//crud-operation
{path:"Crud-operation/employee",component:EmployeeComponent},

//crud-operation-2
{path:'crud-operation-2/crud',component:CrudComponent},
{path:'crud-operation-2/edit-crud/:id',component:EditCrudComponent},
{path:'crud-operation-2/localstorage',component:LocalstorageComponent},

{ path: '**', redirectTo: 'task' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
