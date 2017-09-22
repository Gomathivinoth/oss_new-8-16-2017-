import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-kneeprimary-intraoperative',
  templateUrl: './kneeprimary-intraoperative.component.html',
  styleUrls: ['./kneeprimary-intraoperative.component.css']
})
export class KneeprimaryIntraoperativeComponent implements OnInit {

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
    intra_tourniquet: '',
    intra_tourniquetpressure: '',
    intra_arthrotomy: '',
    intra_tibialdefect: '',
    intra_aoriclassification: '',
    intra_patellaouterbridgeclassification: '',
    intra_patellarthickness: '',
    intra_acl: '',
    intra_pcl: '',
    intra_mcl: '',
    intra_lcl: '',
    intra_varus: [{
      'varusName': String,
      'selected': Boolean,
    }],
    intra_valgus: [{
      'valgusName': String,
      'selected': Boolean,
    }],
    intra_flexion: [{
      'flexionName': String,
      'selected': Boolean,
    }],
    intra_distalfemoral: '',
    intra_resurfacing: '',
    intra_reconstruction: [{
      'reconstructionName': String,
      'selected': Boolean,
    }],
    intra_femoralstem: '',
    intra_stem: '',
    intra_tibialstem: '',
    intra_tstem: '',
    intra_cement: '',
    intra_antibiotic: '',
    intra_viscosity: '',
    intra_cocktail: '',
    intra_complications: '',
    intra_complicationdetail: '',
    intra_company: '',
    intra_design: '',
    intra_femoralSize: '',
    intra_tibialSize: '',
    intra_patellarSize: '',
    intra_insertPoly: '',
    intra_componentStability: [{
      'componentStabilityName': String,
      'selected': Boolean,
    }],
    intra_contracture: '',
    intra_hyperextension: '',
    intra_medialLaxity: '',
    intra_patellarTracking: '',
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
    intra_information: '',
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

  intravarus: any = [
    { 'varusName': 'Posteromedial release', 'selected': false },
    { 'varusName': 'Deep MCL release', 'selected': false },
    { 'varusName': 'Pes release', 'selected': false },
    { 'varusName': 'Superficial MCL pie', 'selected': false },
    { 'varusName': 'Superficial MCL release', 'selected': false },
    { 'varusName': 'Popliteus release', 'selected': false },
    { 'varusName': 'Medial epicondylar osteotomy', 'selected': false }
  ];

  intravalgus: any = [
    { 'valgusName': 'Posterolateral release', 'selected': false },
    { 'valgusName': 'LCL pie crusting /release', 'selected': false },
    { 'valgusName': 'Popliteus release', 'selected': false },
    { 'valgusName': 'IT band pie crusting / release', 'selected': false }
    // { 'valgusName': 'Lateral epicondylar osteotomy', 'selected': false }
  ];

  intraflexion: any = [
    { 'flexionName': 'Posterior capsular release', 'selected': false },
    { 'flexionName': 'Hamstring release', 'selected': false },
    { 'flexionName': 'pie crusting', 'selected': false }

  ];

  intrareconstruction: any = [
    { 'reconstructionName': 'Cement', 'selected': false },
    { 'reconstructionName': 'Cement + Screw', 'selected': false },
    { 'reconstructionName': 'Bone graft impaction', 'selected': false },
    { 'reconstructionName': 'Bone graft wedge', 'selected': false },
    { 'reconstructionName': 'Metal wedge', 'selected': false },
    { 'reconstructionName': 'Sleeve', 'selected': false }

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

  femoralstemChange(femoralstem) {
    this.femoralstem = true;
  }
  femoralstemChange1(femoralstem) {
    this.femoralstem = false;
    this.patient.intra_femoralstem = '';
  }

  tibialstemChange(femoralstem) {
    this.tibialStem = true;
  }
  tibialstemChange1(femoralstem) {
    this.tibialStem = false;
    this.patient.intra_tibialstem = '';
  }
  cementChange1(cement) {
    this.cements = true;
  }
  cementChange(cement) {
    this.cements = false;
    this.patient.intra_cement = '';
  }

  complicationsChange1(cement) {
    this.complication = true;
  }
  complicationsChange(cement) {
    this.complication = false;
    this.patient.intra_complications = '';
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
    this.surgeonService.surgeon_AddPatientIntraoperative(patient).subscribe(data => { });
     this.router.navigate(['surgeon/knee/knee-primary-postoperative/',this.patient.patientId]);
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
    this.patient.intra_varus = this.intravarus;
    this.patient.intra_valgus = this.intravalgus;
    this.patient.intra_flexion = this.intraflexion;
   
    this.patient.intra_reconstruction = this.intrareconstruction;
    this.patient.intra_componentStability = this.intracomponentStability;
    this.patient.intra_mechanical = this.intramechanical;
    this.patient.intra_pharmacological = this.intrapharmacological;
  }

}
