import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-kneerevision-radiology',
  templateUrl: './kneerevision-radiology.component.html',
  styleUrls: ['./kneerevision-radiology.component.css']
})
export class KneerevisionRadiologyComponent implements OnInit {

  constructor(
    private surgeonService: SurgeonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  currentUrl;
  patentId;
  patientname;
  patientage;
  patientsex;
  imageDetails;
  image = {
    patientId: '',
    imageId: ''
  }
  applyradiology;
  patient = {
    patientId: '',
    rad_patella: '',
    rad_femoralcomponent: '',
    rad_tibialcomponent: '',
    rad_femoralrotation: '',
    rad_tibialrotation: '',
    rad_availablemrict: '',
    rad_esr: '',
    rad_crp: '',
    rad_vitaminD: '',
    rad_vitaminB12: '',
    filename: '',
    filetype: '',
    filesize: '',
    post_side:''
  }


 patientPreOperative() {
    this.router.navigate(['surgeon/knee/knee-revision-preoperative/', this.patient.patientId]);
  }

  radiology() {
    this.router.navigate(['surgeon/knee/knee-revision-radiology/',this.patient.patientId]);
  }

  intraoperative() {
    this.router.navigate(['surgeon/knee/knee-revision-intraoperative/',this.patient.patientId]);
  }

   postoperative() {
    this.router.navigate(['surgeon/knee/knee-revision-postoperative/',this.patient.patientId]);
  }

   postoperativescore() {
    this.router.navigate(['surgeon/knee/knee-revision-postoperativescore/',this.patient.patientId]);
  }
  radiologyChangeEvent(fileInput: any) {
    this.patient.filename = fileInput.target.files[0]['name'];
    this.patient.filetype = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "radiology_");
    formData.append("Type", "kneerevision_radiologyimage");
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
    this.surgeonService.surgeon_AddPatientRevisionRadiology(patient).subscribe(data => {
      console.log(data);
       this.router.navigate(['surgeon/knee/knee-revision-intraoperative/',this.patient.patientId]);

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
      this.patient.post_side = dataPatientId.message.demography.side;
      this.patientsex = dataPatientId.message.demography.gender;
      this.imageDetails = dataPatientId.message.imageupload;
    });
  }

}
