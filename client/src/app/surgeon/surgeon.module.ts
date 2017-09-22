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
import { PreoperativeComponent } from './components/hip/preoperative/preoperative.component';
import { PrimaryRadiologyComponent } from './components/hip/primary-radiology/primary-radiology.component';
import { PrimaryPostoperativeComponent } from './components/hip/primary-postoperative/primary-postoperative.component';
import { KneeprimaryPreoperativeComponent } from './components/knee/kneeprimary-preoperative/kneeprimary-preoperative.component';
import { KneeprimaryRadiologyComponent } from './components/knee/kneeprimary-radiology/kneeprimary-radiology.component';
import { KneeprimaryIntraoperativeComponent } from './components/knee/kneeprimary-intraoperative/kneeprimary-intraoperative.component';
import { KneeprimaryPostoperativeComponent } from './components/knee/kneeprimary-postoperative/kneeprimary-postoperative.component';
import { KneeprimaryPostoperativescoreComponent } from './components/knee/kneeprimary-postoperativescore/kneeprimary-postoperativescore.component';
import { KneerevisionPreoperativeComponent } from './components/knee/kneerevision-preoperative/kneerevision-preoperative.component';
import { KneerevisionRadiologyComponent } from './components/knee/kneerevision-radiology/kneerevision-radiology.component';
import { KneerevisionIntraoperativeComponent } from './components/knee//kneerevision-intraoperative/kneerevision-intraoperative.component';
import { KneerevisionPostoperativeComponent } from './components/knee//kneerevision-postoperative/kneerevision-postoperative.component';
import { KneerevisionPostoperativescoreComponent } from './components/knee/kneerevision-postoperativescore/kneerevision-postoperativescore.component';




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
    TabContentComponent,
    PreoperativeComponent,
    PrimaryRadiologyComponent,
    PrimaryPostoperativeComponent,
    KneeprimaryPreoperativeComponent,
    KneeprimaryRadiologyComponent,
    KneeprimaryIntraoperativeComponent,
    KneeprimaryPostoperativeComponent,
    KneeprimaryPostoperativescoreComponent,
    KneerevisionPreoperativeComponent,
    KneerevisionRadiologyComponent,
    KneerevisionIntraoperativeComponent,
    KneerevisionPostoperativeComponent,
    KneerevisionPostoperativescoreComponent
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
