import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from './hospitaladmin.routing';
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



@NgModule({
  declarations: [
    HospitaladminComponent,
    HospitalComponent,
    UserComponent,
    ProsthesisComponent,
    OptionsComponent,
    NavbarComponent,
    DashboardComponent,
    AddHospitalComponent,
    AddBranchComponent,
    AddSurgeonComponent,
    AddSupportStaffComponent 
  ],
  imports: [
    AppRoutingModule,    
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HospitaladminComponent]
})
export class HospitaladminModule { }
