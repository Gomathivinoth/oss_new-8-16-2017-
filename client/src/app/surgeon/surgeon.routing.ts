import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: SurgeonComponent,// Default Route

    children: [
      {
        path: 'knee',
        component: KneeComponent,
        children: [
          {
            path: 'knee-primary',
            component: KneePrimaryComponent
          },
          {
            path: 'knee-primary-preoperative/:id',
            component: KneeprimaryPreoperativeComponent
          },
          {
            path: 'knee-primary-radiology/:id',
            component: KneeprimaryRadiologyComponent
          },
          {
            path: 'knee-primary-intraoperative/:id',
            component: KneeprimaryIntraoperativeComponent
          },
          {
            path: 'knee-primary-postoperative/:id',
            component: KneeprimaryPostoperativeComponent
          },
          {
            path: 'knee-primary-postoperativescore/:id',
            component: KneeprimaryPostoperativescoreComponent
          },
          {
            path: 'knee-revision',
            component: KneeRevisionComponent
          },
          {
            path: 'knee-revision-preoperative/:id',
            component: KneerevisionPreoperativeComponent
          },
          {
            path: 'knee-revision-radiology/:id',
            component: KneerevisionRadiologyComponent
          },
          {
            path: 'knee-revision-intraoperative/:id',
            component: KneerevisionIntraoperativeComponent
          },
          {
            path: 'knee-revision-postoperative/:id',
            component: KneerevisionPostoperativeComponent
          },
          {
            path: 'knee-revision-postoperativescore/:id',
            component: KneerevisionPostoperativescoreComponent
          },
          {
            path: 'knee-patients',
            component: KneePatientsComponent
          }
        ]
      },
      {
        path: 'Hip',
        component: HipComponent,
        children: [
          {
            path: 'hip-primary',
            component: HipPrimaryComponent
          },
          {
            path: 'hip-primary-preoperative/:id',
            component: PreoperativeComponent
          },
          //  {
          //   path: 'hip-primary-preoperative',
          //   component: PreoperativeComponent
          // },
          {
            path: 'hip-primary-radiology/:id',
            component: PrimaryRadiologyComponent
          },
          {
            path: 'hip-primary-postoperative/:id',
            component: PrimaryPostoperativeComponent
          },
          {
            path: 'hip-revision',
            component: HipRevisionComponent
          },
          {
            path: 'hip-patients',
            component: HipPatientsComponent
          }
        ]
      },
      {
        path: 'Spine',
        component: SpineComponent,
        children: [
          {
            path: 'spine-primary',
            component: SpinePrimaryComponent
          },
          {
            path: 'spine-revision',
            component: SpineRevisionComponent
          },
          {
            path: 'spine-patients',
            component: SpinePatientsComponent
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