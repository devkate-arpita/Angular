import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/Databinding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/Databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './components/Databinding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/Databinding/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './components/Databinding/summary/summary.component';
import { ProfileComponent } from './components/task/profile/profile.component';
import { TaskComponent } from './components/task/task.component';
import { AdminUserLoginComponent } from './components/task/admin-user-login/admin-user-login.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { RemainingPipe } from './components/pipe/custom-pipe/remaining.pipe';
import { DirectiveComponent } from './components/directive/directive.component';
import { StructuralComponent } from './components/directive/structural/structural.component';
import { AttributeComponent } from './components/directive/attribute/attribute.component';
import { DatabindingTask1Component } from './components/Databinding/databinding-task1/databinding-task1.component';
import { CustomDirectiveComponent } from './components/directive/custom-directive/custom-directive.component';
import { HighlightsDirective } from './components/directive/custom-directive/highlights.directive';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DirectiveTaskComponent } from './components/directive/directive-task/directive-task.component';
import { CommonModule } from '@angular/common';
import { HooksParentComponent } from './components/hooks/hooks-parent/hooks-parent.component';
import { HooksChildComponent } from './components/hooks/hooks-parent/hooks-child/hooks-child.component';
import { ReactiveComponent } from './components/Forms/reactive/reactive.component';
import { FormsTaskComponent } from './components/Forms/forms-task/forms-task.component';
import { TemplateDrivenComponent } from './components/Forms/template-driven/template-driven.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './components/Crud-operation/employee/employee.component';
import { CrudComponent } from './components/Crud-operation-2/crud/crud.component';
import { EditCrudComponent } from './components/Crud-operation-2/crud/edit-crud/edit-crud.component';
import { LocalstorageComponent } from './components/Crud-operation-2/localstorage/localstorage.component';
import { SignupComponent } from './components/task/signup/signup.component';
import { LoginAdminUserComponent } from './components/task/login-admin-user/login-admin-user.component';
import { AdminDashboardComponent } from './components/task/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/task/user-dashboard/user-dashboard.component';
import { CustomPipesComponent } from './components/pipes/custom-pipes/custom-pipes.component';
// import{}from'.angular/fire/compact';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FirebaseSignupComponent } from './components/task/firebase-signup/firebase-signup.component';
import { DashboardComponent } from './components/task/dashboard/dashboard.component';
import { environment } from 'src/environments/environment';
import { FirebaseLoginComponent } from './components/task/firebase-login/firebase-login.component';
import { FirebaseRegisterComponent } from './components/task/firebase-register/firebase-register.component';
import { RouterModule } from '@angular/router';
import { FirebaseForgotpasswordComponent } from './components/task/firebase-forgotpassword/firebase-forgotpassword.component';
import { FirebaseVerfiyemailComponent } from './components/task/firebase-verfiyemail/firebase-verfiyemail.component';
import { StudentDataComponent } from './components/task/student-data/student-data.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    SummaryComponent,
    ProfileComponent,
    TaskComponent,
    AdminUserLoginComponent,
    PipeComponent,
    RemainingPipe,
    DirectiveComponent,
    StructuralComponent,
    AttributeComponent,
    DatabindingTask1Component,
    HighlightsDirective,
    CustomDirectiveComponent,
    BuiltInPipesComponent,
    CustomPipeComponent,
    ParentComponent,
    Child1Component,
    HtmlCssComponent,
    LoginFormComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    DirectiveTaskComponent,
    ParentComponent,
    HooksParentComponent,
    HooksChildComponent,
    ReactiveComponent,
    FormsTaskComponent,
    TemplateDrivenComponent,
    EmployeeComponent,
    CrudComponent,
    EditCrudComponent,
    LocalstorageComponent,
    SignupComponent,
    LoginAdminUserComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CustomPipesComponent,
    FirebaseSignupComponent,
    DashboardComponent,
    FirebaseLoginComponent,
    FirebaseRegisterComponent,
    FirebaseForgotpasswordComponent,
    FirebaseVerfiyemailComponent,
    StudentDataComponent,

    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatInputModule,
    AngularMaterialComponent,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), 
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore())
    
    provideFirebaseApp(() => initializeApp(environment.firebase)), // This must match environment.ts
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

