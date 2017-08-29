import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule , Http} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HospitalService } from './services/hospital.service';
import { HospitalAdminService } from './services/hospital-admin.service';
import { BranchAdminService } from './services/branch-admin.service';
import { SurgeonService } from './services/surgeon.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HospitalService ,HospitalAdminService, BranchAdminService, SurgeonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
