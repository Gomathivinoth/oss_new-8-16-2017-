import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-hipprimary-radiology',
  templateUrl: './hipprimary-radiology.component.html',
  styleUrls: ['./hipprimary-radiology.component.css']
})
export class HipprimaryRadiologyComponent implements OnInit {

  constructor(
    private surgeonService: SurgeonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  patientPreOperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-preoperative/', this.patient.patientId]);
  }

  radiology() {
    this.router.navigate(['surgeon/Hip/hip-primary-radiology/', this.patient.patientId]);
  }
  intraoperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-intraoperative/', this.patient.patientId]);
  }
  postoperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-postoperative/', this.patient.patientId]);
  }
  postoperativescore() {
    this.router.navigate(['surgeon/Hip/hip-primary-postoperativescore/', this.patient.patientId]);
  }
  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
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
  image = {
    patientId: '',
    imageId: ''
  }
  patient = {
    patientId: '',
    rad_ficat: '',
    rad_grading: [{
      'gradingName': String,
      'selected': Boolean,
    }],
    rad_protrusio: [{
      'protrusioName': String,
      'selected': Boolean,
    }],
    rad_DDH: [{
      'dDHName': String,
      'selected': Boolean,
    }],
    rad_grade: '',
    rat_croweclassification: '',
    rat_paproskyclassification: '',
    rat_femurclassification: '',
    rat_morphotype: '',
    rad_LLD:'',
    rad_osteopenia:'',
    filename: '',
    filetype: '',
    filesize: ''
  }

  grading: any = [
    { 'gradingName': 'Grading of AVN', 'selected': false }
  ];

  protrusio: any = [
    { 'protrusioName': 'Grading of AVN', 'selected': false }
  ];

  DDH: any = [
    { 'dDHName': 'DDH', 'selected': false }
  ];

  

  profileChangeEvent(fileInput: any) {
    this.patient.filetype = fileInput.target.files[0]['type'];
    this.patient.filesize = fileInput.target.files[0]['size'];
    this.patient.filename = fileInput.target.files[0]['name'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "preoperative_");
    formData.append("Type", "hipprimary_radiologyimage");
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

  ngOnInit() {
    this.applyradiology = true;
    this.patient.rad_grading = this.grading;
    this.patient.rad_protrusio = this.protrusio;
    this.patient.rad_DDH = this.DDH;
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
