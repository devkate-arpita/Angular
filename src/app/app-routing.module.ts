import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { InterpolationComponent } from './components/Databinding/interpolation/interpolation.component';
import { EventBindingComponent } from './components/Databinding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/Databinding/property-binding/property-binding.component';
import { TwoWayBindingComponent } from './components/Databinding/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path:'html-css',component:HtmlCssComponent},
  {path:'databinding/interpolation',component:InterpolationComponent},
  {path:'databinding/event-binding',component:EventBindingComponent},
  {path:'databinding/property-binding',component:PropertyBindingComponent},
  {path:'databinding/two-way-binding',component:TwoWayBindingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
