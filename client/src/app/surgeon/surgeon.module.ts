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
import { HipprimaryPreoperativeComponent } from './components/hip/hipprimary-preoperative/hipprimary-preoperative.component';
import { HipprimaryRadiologyComponent } from './components/hip/hipprimary-radiology/hipprimary-radiology.component';
import { HipprimaryIntraoperativeComponent } from './components/hip/hipprimary-intraoperative/hipprimary-intraoperative.component';
import { HipprimaryPostoperativeComponent } from './components/hip/hipprimary-postoperative/hipprimary-postoperative.component';
import { HipprimaryPostoperativescoreComponent } from './components/hip/hipprimary-postoperativescore/hipprimary-postoperativescore.component';
import { HiprevisionPreoperativeComponent } from './components/hip/hiprevision-preoperative/hiprevision-preoperative.component';
import { HiprevisionRadiologyComponent } from './components/hip/hiprevision-radiology/hiprevision-radiology.component';
import { HiprevisionIntraoperativeComponent } from './components/hip/hiprevision-intraoperative/hiprevision-intraoperative.component';
import { HiprevisionPostoperativeComponent } from './components/hip/hiprevision-postoperative/hiprevision-postoperative.component';
import { HiprevisionPostoperativescoreComponent } from './components/hip/hiprevision-postoperativescore/hiprevision-postoperativescore.component';




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
    KneeprimaryPreoperativeComponent,
    KneeprimaryRadiologyComponent,
    KneeprimaryIntraoperativeComponent,
    KneeprimaryPostoperativeComponent,
    KneeprimaryPostoperativescoreComponent,
    KneerevisionPreoperativeComponent,
    KneerevisionRadiologyComponent,
    KneerevisionIntraoperativeComponent,
    KneerevisionPostoperativeComponent,
    KneerevisionPostoperativescoreComponent,
    HipprimaryPreoperativeComponent,
    HipprimaryRadiologyComponent,
    HipprimaryIntraoperativeComponent,
    HipprimaryPostoperativeComponent,
    HipprimaryPostoperativescoreComponent,
    HiprevisionPreoperativeComponent,
    HiprevisionRadiologyComponent,
    HiprevisionIntraoperativeComponent,
    HiprevisionPostoperativeComponent,
    HiprevisionPostoperativescoreComponent
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
