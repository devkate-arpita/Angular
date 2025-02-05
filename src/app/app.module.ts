import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { InterpolationComponent } from './components/Databinding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/Databinding/property-binding/property-binding.component';
import { EventBindingComponent } from './components/Databinding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/Databinding/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlCssComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
