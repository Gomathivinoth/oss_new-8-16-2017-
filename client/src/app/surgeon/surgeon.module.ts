import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './surgeon.routing';
import { SurgeonComponent } from './surgeon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { KneeComponent } from './components/knee/knee.component';
import { KneePrimaryComponent } from './components/knee/knee-primary/knee-primary.component';
import { KneeRevisionComponent } from './components/knee/knee-revision/knee-revision.component';
import { KneePatientsComponent } from './components/knee/knee-patients/knee-patients.component';

import { HipComponent } from './components/hip/hip.component';
import { HipPrimaryComponent } from './components/hip/hip-primary/hip-primary.component';
import { HipRevisionComponent } from './components/hip/hip-revision/hip-revision.component';
import { HipPatientsComponent } from './components/hip/hip-patients/hip-patients.component';

import { SpineComponent } from './components/spine/spine.component';
import { SpinePrimaryComponent } from './components/spine/spine-primary/spine-primary.component';
import { SpineRevisionComponent } from './components/spine/spine-revision/spine-revision.component';
import { SpinePatientsComponent } from './components/spine/spine-patients/spine-patients.component';
import { DemographicComponent } from './components/demographic/demographic.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';



@NgModule({
  declarations: [
    SurgeonComponent,
    NavbarComponent,
    DashboardComponent,
    KneeComponent,
    HipComponent,
    SpineComponent,
    KneePrimaryComponent,
    KneeRevisionComponent,
    KneePatientsComponent,
    HipPrimaryComponent,
    HipRevisionComponent,
    HipPatientsComponent,
    SpinePrimaryComponent,
    SpineRevisionComponent,
    SpinePatientsComponent,
    DemographicComponent,
    TabComponent,
    TabContentComponent
  ],
  imports: [
    AppRoutingModule,    
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SurgeonComponent]
})
export class SurgeonModule { }
