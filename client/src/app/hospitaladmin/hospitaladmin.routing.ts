import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HospitaladminComponent } from './hospitaladmin.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { UserComponent } from './components/user/user.component';
import { ProsthesisComponent } from './components/prosthesis/prosthesis.component';
import { OptionsComponent } from './components/options/options.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AddHospitalComponent } from './components/hospital/add-hospital/add-hospital.component';
import { AddBranchComponent } from './components/hospital/add-branch/add-branch.component';
import { AddSurgeonComponent } from './components/user/add-surgeon/add-surgeon.component';
import { AddSupportStaffComponent } from './components/user/add-support-staff/add-support-staff.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HospitaladminComponent,// Default Route
    children: [
      {
        path: 'hospital',
        component: HospitalComponent,
        children: [

          {
            path: 'add-branch',
            component: AddBranchComponent
          }
        ]
      },
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
        path: 'prosthesis',
        component: ProsthesisComponent
      },
      {
        path: 'options',
        component: OptionsComponent
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