import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ApisComponent } from './components/apis/apis.component'
import { SupportComponent } from './components/support/support.component'

const routes: Routes = [
  {
    path:'',
    component:ApisComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'apis',
    component:ApisComponent  
  },
  {
    path:'support',
    component:SupportComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
