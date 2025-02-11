import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { InterpolationComponent } from './components/Databinding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/Databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './components/Databinding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/Databinding/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './components/Databinding/summary/summary.component';
import { ProfileComponent } from './components/task/profile/profile.component';
import { TaskComponent } from './components/task/task.component';
import { AdminUserLoginComponent } from './components/task/admin-user-login/admin-user-login.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { RemainingPipe } from './components/pipe/remaining.pipe';
import { DirectiveComponent } from './components/directive/directive.component';
import { StructuralComponent } from './components/directive/structural/structural.component';
import { AttributeComponent } from './components/directive/attribute/attribute.component';
import { DatabindingTask1Component } from './components/Databinding/databinding-task1/databinding-task1.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCssComponent,
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
    DatabindingTask1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
