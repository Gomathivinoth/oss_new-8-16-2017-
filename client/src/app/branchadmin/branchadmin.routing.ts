import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BranchadminComponent } from './branchadmin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { AddSurgeonComponent } from './components/user/add-surgeon/add-surgeon.component';
import { AddSupportStaffComponent } from './components/user/add-support-staff/add-support-staff.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: BranchadminComponent,// Default Route
    children: [   
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: 'add-support-staff',
            component: AddSupportStaffComponent
          },
          {
            path: 'add-surgeon',
            component: AddSurgeonComponent
          }
        ]
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
     ]
  },
  {
    path: 'navbar',
    component: NavbarComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }