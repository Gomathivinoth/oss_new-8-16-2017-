import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BranchadminComponent } from './branchadmin.component';
import { AppRoutingModule } from './branchadmin.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { AddSurgeonComponent } from './components/user/add-surgeon/add-surgeon.component';
import { AddSupportStaffComponent } from './components/user/add-support-staff/add-support-staff.component';

@NgModule({
  declarations: [
    BranchadminComponent,
    NavbarComponent,
    DashboardComponent,
    UserComponent,
    AddSurgeonComponent,
    AddSupportStaffComponent
  ],
  imports: [  
    AppRoutingModule,  
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [BranchadminComponent]
})
export class BranchadminModule { }
