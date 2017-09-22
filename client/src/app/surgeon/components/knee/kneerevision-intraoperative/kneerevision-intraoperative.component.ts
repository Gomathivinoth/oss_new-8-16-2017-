import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-kneerevision-intraoperative',
  templateUrl: './kneerevision-intraoperative.component.html',
  styleUrls: ['./kneerevision-intraoperative.component.css']
})
export class KneerevisionIntraoperativeComponent implements OnInit {

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
  applyintraoperative;
  tranexamicacid;

  patient = {
    patientId: '',
    intra_surgicalplan: '',
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
    intra_femoralcomp: '',
    intra_patellarstatus: '',
    intra_aoriclassification: '',
    intra_femoralDefect: '',
    intra_tibialsizing: '',
    intra_pattendon: '',
    intra_spacer: '',
    intra_patellarretinaculum: '',
    intra_medialcollateral: '',
    intra_lateralcollateral: '',
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
    intra_defectReconstruction: '',
    intra_femoralstem: '',
    intra_stem: '',
    intra_tibialstem: '',
    intra_tstem: '',
    intra_cement: '',
    intra_antibiotic: '',
    intra_viscosity: '',
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
    filename: '',
    filetype: '',
    filesize: ''
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

addPatientIntraoperative(patient) {
    this.surgeonService.surgeon_AddPatientRevisionIntraoperative(patient).subscribe(data => {
         this.router.navigate(['surgeon/knee/knee-revision-postoperative/',this.patient.patientId]);
     });
    
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
    });

     this.patient.intra_anaesthesia = this.Anaesthesia;
    this.patient.intra_varus = this.intravarus;
    this.patient.intra_valgus = this.intravalgus;
    this.patient.intra_flexion = this.intraflexion;
    this.patient.intra_componentStability = this.intracomponentStability;
    this.patient.intra_mechanical = this.intramechanical;
    this.patient.intra_pharmacological = this.intrapharmacological;
  }

}
