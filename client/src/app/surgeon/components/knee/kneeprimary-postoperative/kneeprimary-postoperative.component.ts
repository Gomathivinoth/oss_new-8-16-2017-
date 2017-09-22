import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-kneeprimary-postoperative',
  templateUrl: './kneeprimary-postoperative.component.html',
  styleUrls: ['./kneeprimary-postoperative.component.css']
})
export class KneeprimaryPostoperativeComponent implements OnInit {

  constructor(
    private surgeonService: SurgeonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  patentId;
  patientname;
  patientage;
  patientsex;
  currentUrl;
  imageDetails;
  oneyear = true;
  image = {
    patientId: '',
    imageId: ''
  }
applypostoperative;
  patient = {
    patientId: '',
    post_date: '',
    post_side: '',
    post_posteriorslope: '',
    post_hipkneeankle: '',
    filename: '',
    filetype: '',
    filesize:''
  }

     patientPreOperative() {
    this.router.navigate(['surgeon/knee/knee-primary-preoperative/',this.patient.patientId]);
  }

  radiology() {
    this.router.navigate(['surgeon/knee/knee-primary-radiology/',this.patient.patientId]);
  }

  intraoperative() {
   this.router.navigate(['surgeon/knee/knee-primary-intraoperative/',this.patient.patientId]);
  }

  postoperative() {
   this.router.navigate(['surgeon/knee/knee-primary-postoperative/',this.patient.patientId]);
  }

  postoperativescore() {
   this.router.navigate(['surgeon/knee/knee-primary-postoperativescore/',this.patient.patientId]);
  }

   postoperativeChangeEvent(fileInput: any) {
    this.patient.filename = fileInput.target.files[0]['name'];
    this.patient.filetype = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "postoperative_");
    formData.append("Type", "kneeprimary_postoperativeimage");
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
    this.image.imageId = imageId;
    this.surgeonService.deleteImage(this.image).subscribe(data => {
      this.imageDetails = data.data;
    });
  }

   addPatientPostoperative(patient) {
    this.surgeonService.surgeon_AddPatientPostoperative(patient).subscribe(data => {
      this.router.navigate(['surgeon/knee/knee-primary-postoperativescore/',this.patient.patientId]);
    });
  }

  ngOnInit() {
    this.applypostoperative = true;
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.surgeonService.surgeon_SinglePatientId(this.currentUrl.id).subscribe(dataPatientId => {
      console.log(dataPatientId);
      console.log(dataPatientId.message.demography.firstname);
      this.patentId = dataPatientId.message.demography._id;
      this.patient.patientId = dataPatientId.message._id;
      this.patientname = dataPatientId.message.demography.firstname + '' + dataPatientId.message.demography.middlename + '' + dataPatientId.message.demography.lastname;
      this.patientage = dataPatientId.message.demography.age;
      this.patientsex = dataPatientId.message.demography.gender;
      this.patient.post_side = dataPatientId.message.demography.side;
      this.imageDetails = dataPatientId.message.imageupload;
    });
  }

}
