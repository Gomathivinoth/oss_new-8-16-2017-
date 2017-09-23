import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-hipprimary-intraoperative',
  templateUrl: './hipprimary-intraoperative.component.html',
  styleUrls: ['./hipprimary-intraoperative.component.css']
})
export class HipprimaryIntraoperativeComponent implements OnInit {

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
  Acetabulars;
  femoralcements;
  applyintraoperative;
  tranexamicacid = false;
  femoralstem = false;
  tibialStem = false;
  cements = false;
  complication = false;
  patient = {
    patientId: '',

    // intra operative
    intra_procedure: '',
    intra_navigation: '',
    intra_drapes: '',
    intra_hoods: '',
    intra_prophylactic: '',
    intra_tranexamicoption: '',
    intra_anaesthesia: [{
      'anaesthesiaName': String,
      'selected': Boolean,
    }],
    intra_grade: '',
    intra_position:'',
    intra_approach:'',
    intra_softtissue : [{
      'softtissueName': String,
      'selected': Boolean,
    }],
    intra_STSO:'',
    intra_boneGraft:'',  
    intra_impaction: [{
      'impactionName': String,
      'selected': Boolean,
    }], 
    intra_bulk: [{
      'bulkName': String,
      'selected': Boolean,
    }],
    intra_cement: '',
    intra_antibiotic: '',
    intra_viscosity: '',
    intra_uncement:'',
    intra_acetabular:'',
    intra_screws:'',
    intra_bearing:'',
    intra_acetabularliner:'',
    intra_company: '',
    intra_model:'',
    intra_Size:'',
    intra_femoralcement: '',
    intra_femoralantibiotic: '',
    intra_femoralviscosity: '',
    intra_femoraluncement:'',
    intra_femoralbearing:'',
    intra_femoralcompany: '',
    intra_femoralmodel:'',
    intra_femoralSize:'', 
    intra_posteriorclosure:'',    
    intra_operativehour: '',
    intra_operativeminute: '',
    intra_bloodloss: '',
    intra_drains: '',
    intra_mechanical: [{
      'mechanicalName': String,
      'selected': Boolean,
    }],
    intra_pharmacological: [{
      'pharmacologicalName': String,
      'selected': Boolean,
    }],
    intra_LLD:'',
    intra_prophylaxis:'',
    filetype: '',
    filename: '',
    filesize: ''
    // intra operative end
  }

  Anaesthesia: any = [
    { 'anaesthesiaName': 'Spinal', 'selected': false },
    { 'anaesthesiaName': 'Epidural', 'selected': false },
    { 'anaesthesiaName': 'GA', 'selected': false },
    { 'anaesthesiaName': 'Spinal + Epidural', 'selected': false },
    { 'anaesthesiaName': 'GA + Epidural', 'selected': false },
    { 'anaesthesiaName': 'Others', 'selected': false }
  ];

  intra_softtissue: any = [
    { 'softtissueName': 'Anterior capsule', 'selected': false },
    { 'softtissueName': 'IT band', 'selected': false },
    { 'softtissueName': 'Ilio Psoas', 'selected': false },
    { 'softtissueName': 'Adductor', 'selected': false }
  ];

  intra_impaction: any = [
    { 'impactionName': 'Autograft', 'selected': false },
    { 'impactionName': 'Allograft', 'selected': false }
  ];


  intra_bulk: any = [
    { 'bulkName': 'Autograft', 'selected': false },
    { 'bulkName': 'Allograft', 'selected': false }
  ];



  intracomponentStability: any = [
    { 'componentStabilityName': 'Stable in Flxn-Extn', 'selected': false },
    { 'componentStabilityName': 'Stable in Flexion', 'selected': false },
    { 'componentStabilityName': 'Stable in Extension', 'selected': false }

  ];

  intramechanical: any = [
    { 'mechanicalName': 'TED Stockings', 'selected': false },
    { 'mechanicalName': 'Calf pump', 'selected': false }

  ];
  intrapharmacological: any = [
    { 'pharmacologicalName': 'LMWH', 'selected': false },
    { 'pharmacologicalName': 'Oral', 'selected': false },
    { 'pharmacologicalName': 'Aspirin', 'selected': false },
    { 'pharmacologicalName': 'Warfarin', 'selected': false }

  ];

  tranexamicChange(tranexamicacid) {
    this.tranexamicacid = true;
  }
  tranexamicChange1(tranexamicacid) {
    this.tranexamicacid = false;
    this.patient.intra_tranexamicoption = '';
  }

 
  cementChange1(cement) {
    this.cements = true;
  }
  cementChange(cement) {
    this.cements = false;
    this.patient.intra_cement = '';
  }

  femoralcementChange1(cement) {
    this.femoralcements = true;
  }
  femoralcementChange(cement) {
    this.femoralcements = false;
    this.patient.intra_cement = '';
  }


  acetabularChange1(acetabular) {
    this.Acetabulars = true;
  }
  acetabularChange(acetabular) {
    this.Acetabulars = false;
    this.patient.intra_screws = '';
  }



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
   addPatientIntraoperative(patient) {
    this.surgeonService.surgeon_AddHipPrimaryIntraoperative(patient).subscribe(data => { });
    this.router.navigate(['surgeon/Hip/hip-primary-postoperative/', this.patient.patientId]);
  }


  ngOnInit() {
this.applyintraoperative = true;
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

     this.patient.intra_anaesthesia = this.Anaesthesia;
    this.patient.intra_softtissue = this.intra_softtissue;
   this.patient.intra_impaction = this.intra_impaction;
   this.patient.intra_bulk = this.intra_bulk;
    this.patient.intra_mechanical = this.intramechanical;
    this.patient.intra_pharmacological = this.intrapharmacological;
  }


}
