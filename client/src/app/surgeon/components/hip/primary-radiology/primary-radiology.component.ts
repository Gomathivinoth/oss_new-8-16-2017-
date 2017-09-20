import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-primary-radiology',
  templateUrl: './primary-radiology.component.html',
  styleUrls: ['./primary-radiology.component.css']
})
export class PrimaryRadiologyComponent implements OnInit {

  constructor(
     private surgeonService: SurgeonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

   patientPreOperative(){
      this.router.navigate(['surgeon/Hip/hip-primary-preoperative']);
  }
  
  radiology(){
      this.router.navigate(['surgeon/Hip/hip-primary-radiology']);
  }

  postoperative(){
     this.router.navigate(['surgeon/Hip/hip-primary-postoperative']);
  }
  currentUrl;
  disable = false;
   applyradiology;
  patient_radiology = true;
  patentId;
  patientname;
  patientage;
  patientsex;
  imageDetails;

   patient = {
     patientId :'',
     rad_ficat:'',
     rad_grading: [{
      'gradingName': String,
      'selected': Boolean,
    }],
     rad_protrusio: [{
      'protrusioName': String,
      'selected': Boolean,
    }],
    rad_grade:'',
    rat_croweclassification:'',
    rat_paproskyclassification:'',
    rat_femurclassification:'',
    rat_morphotype:''
    }

    grading: any = [
    { 'gradingName': 'Grading of AVN', 'selected': false }
  ];

   protrusio: any = [
    { 'protrusioName': 'Protrusio', 'selected': false }
  ];

  ngOnInit() {
       this.applyradiology = true;
       this.patient.rad_grading = this.grading;
       this.patient.rad_protrusio = this.protrusio;
  }

}
