import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-kneeprimary-radiology',
  templateUrl: './kneeprimary-radiology.component.html',
  styleUrls: ['./kneeprimary-radiology.component.css']
})
export class KneeprimaryRadiologyComponent implements OnInit {

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
  applyradiology;
  oneyear = true;
  image = {
    patientId: '',
    imageId: ''
  }

  patient = {
    patientId: '',
     //radiology start
    implantsitu: [{
      'implantsituName': String,
      'selected': Boolean,
    }],
    rad_valgus: '',
    rad_varus: '',
    rad_patella: '',
    rad_stressfracture: [{
      'stressfractureName': String,
      'selected': Boolean,
    }],
    rad_vcaangle: '',
    rad_availabilityct: '',
    rad_availabilitymri: '',
    rad_vitaminD: '',
    rad_vitaminB12: '',
    filename:'',
    filetype:'',
    filesize:''
    // radiology end
  }

   implantsitu: any = [
    { 'implantsituName': 'None', 'selected': false },
    { 'implantsituName': 'Nail', 'selected': false },
    { 'implantsituName': 'Plate', 'selected': false },
    { 'implantsituName': 'Screw', 'selected': false }
  ];

  stressfracture: any = [
    { 'stressfractureName': 'None', 'selected': false },
    { 'stressfractureName': 'Tibia', 'selected': false },
    { 'stressfractureName': 'Femur', 'selected': false },
    { 'stressfractureName': 'Patella', 'selected': false }
  ];


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

   radiologyfileChangeEvent(fileInput: any) {
    this.patient.filetype = fileInput.target.files[0]['type'];
    this.patient.filesize = fileInput.target.files[0]['size'];
    this.patient.filename = fileInput.target.files[0]['name'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "radiology_");
    formData.append("Type", "kneeprimary_radiologyimage");
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

   addPatientRadiology(patient) {
    this.surgeonService.surgeon_AddPatientRadiology(patient).subscribe(data => {
      this.router.navigate(['surgeon/knee/knee-primary-intraoperative/',this.patient.patientId]);
   

    });
  }

  ngOnInit() {
this.applyradiology = true;
     this.currentUrl = this.activatedRoute.snapshot.params;
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

    this.patient.implantsitu = this.implantsitu;
    this.patient.rad_stressfracture = this.stressfracture;
  }

}
