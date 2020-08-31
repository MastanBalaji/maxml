import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'slider',
    component:SliderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
