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
            path: 'knee-revision',
            component: KneeRevisionComponent
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
          //  {
          //   path: 'hip-primary-preoperative/:id',
          //   component: PreoperativeComponent
          // },
           {
            path: 'hip-primary-preoperative',
            component: PreoperativeComponent
          },
            {
            path: 'hip-primary-radiology',
            component: PrimaryRadiologyComponent
          },
           {
            path: 'hip-primary-postoperative',
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