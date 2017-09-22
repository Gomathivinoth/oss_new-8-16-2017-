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


   
   patientPreOperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-preoperative/',this.patient.patientId]);
  }

  radiology() {
    this.router.navigate(['surgeon/Hip/hip-primary-radiology/',this.patient.patientId]);
  }

  postoperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-postoperative/',this.patient.patientId]);
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
   image = {
    patientId: '',
    imageId: ''
  }
  patient = {
     patientId :'',
     post_notes:'',
     post_date:'',
     filename:'',
     filetype:'',
     filesize:''
  }

   profileChangeEvent(fileInput: any) {
    this.patient.filetype = fileInput.target.files[0]['type'];
    this.patient.filesize = fileInput.target.files[0]['size'];
    this.patient.filename = fileInput.target.files[0]['name'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "preoperative_");
    formData.append("Type", "hipprimary_postoperativeimage");
    formData.append("Age", Number(age));
    formData.append("patientId", this.patient.patientId);
    formData.append("Imagename", this.patient.filename);
    formData.append("Imagetype", this.patient.filetype);
    formData.append("Imagesize", this.patient.filesize);
    formData.append("uploads[]", files[0], files[0]['name']);

    this.surgeonService.uploadImage(formData).subscribe(data => {
      this.imageDetails = data.data;
      console.log(this.imageDetails);
    });
  }

  deleteImage(patientId, imageId, image) {
    this.image.patientId = patientId;
    this.image.imageId = imageId;;
    this.surgeonService.deleteImage(this.image).subscribe(data => {
      this.imageDetails = data.data;
    });
  }

  addPatientPostoperative(patient){
  this.surgeonService.surgeon_AddHipPrimaryPostoperative(patient).subscribe(data => { 
      alert('success');
    });
  }
  ngOnInit() {
    this.applypostoperative = true;
     this.currentUrl = this.activatedRoute.snapshot.params;
    //alert(this.currentUrl.id);
    this.surgeonService.surgeon_SinglePatientId(this.currentUrl.id).subscribe(dataPatientId => {
      console.log(dataPatientId);
      console.log(dataPatientId.message.demography.firstname);
      this.patentId = dataPatientId.message.demography._id;
      this.patient.patientId = dataPatientId.message._id;
      this.patientname = dataPatientId.message.demography.firstname + '' + dataPatientId.message.demography.middlename + '' + dataPatientId.message.demography.lastname;
      this.patientage = dataPatientId.message.demography.age;
      this.patientsex = dataPatientId.message.demography.gender;
      this.imageDetails = dataPatientId.message.imageupload;
    });
  }

}
