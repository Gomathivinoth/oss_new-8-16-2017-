import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-primary-postoperative',
  templateUrl: './primary-postoperative.component.html',
  styleUrls: ['./primary-postoperative.component.css']
})
export class PrimaryPostoperativeComponent implements OnInit {

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
   applypostoperative;
  patient_postoperative = true;
  patentId;
  patientname;
  patientage;
  patientsex;
  imageDetails;
  patient = {
     patientId :'',
     post_notes:'',
     post_date:''
  }

  ngOnInit() {
    this.applypostoperative = true;
  }

}
