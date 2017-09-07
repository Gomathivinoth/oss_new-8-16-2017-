import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-knee-primary',
  templateUrl: './knee-primary.component.html',
  styleUrls: ['./knee-primary.component.css']
})
export class KneePrimaryComponent implements OnInit {

  constructor(
    private surgeonService: SurgeonService,
    private router: Router,
    private http: Http
  ) { }


  patient_demographic = true;
  patient_preoperative = false;
  patient_radiology = false;
  patient_intraoperative = false;
  patient_postoperative = false;
  applydemographic;
  applypreoperative;
  applyradiology;
  applyintraoperative;
  applypostoperative;
  patentId;
  patientname;
  patientage;
  patientsex;

  demographic() {
    this.applydemographic = true;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.applypostoperative = false;
    this.patient_demographic = true;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
    this.patient_postoperative = false;
  }

  patientPreOperative() {

    this.applydemographic = false;
    this.applypreoperative = true;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.applypostoperative = false;
    this.patient_demographic = false;
    this.patient_preoperative = true;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
    this.patient_postoperative = false;
  }

  radiology() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = true;
    this.applyintraoperative = false;
    this.applypostoperative = false;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = true;
    this.patient_intraoperative = false;
    this.patient_postoperative = false;

  }

  intraoperative() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = true;
    this.applypostoperative = false;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = true;
    this.patient_postoperative = false;
  }

  postoperative() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.applypostoperative = true;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
    this.patient_postoperative = true;

  }

  showForm = true;
  firstname = true;
  middlename = true;
  lastname = true;
  dob = true;
  age = true;
  gender = true;
  height = true;
  weight = true;
  bmi = true;
  uhid = true;
  studyid = true;
  address = true;
  city = true;
  state = true;
  country = true;
  zipcode = true;
  telephone = true;
  phoneno = true;
  email = true;
  side = true;
  bilateraltype = true;
  combination = true;
  surgerydate = true;
  surgeonname = true;
  etiology = true;
  valgus = true;
  varus = true;
  flexion = true;
  symptom = true;
  onsetsymptom = true;



  patient = {
    patientId: '',
    hospitalId: '',
    branchId: '',
    surgeonId: '',
    firstname: '',
    middlename: '',
    lastname: '',
    dob: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    bmi: '',
    uhid: '',
    studyid: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    telephone: '',
    phoneno: '',
    email: '',
    side: '',
    bilateraltype: '',
    combination: '',
    surgerydate: '',
    surgeonname: '',
    etiology: '',
    valgus: '',
    varus: '',
    flexion: '',
    joint: [{
      'otherJoint': String,
      'selected': Boolean,
    }],
    symptoms: [{
      'symptomsName': String,
      'selected': Boolean,
    }],
    symptomaggravated: [{
      'aggravatedName': String,
      'selected': Boolean,
    }],
    Comorbidities: [{
      'comorbiditiesName': String,
      'selected': Boolean,
    }],
    Previouskneesurgeries: [{
      'PreviouskneesurgeriesName': String,
      'selected': Boolean,
    }],
    steroid: '',
    viscosupplement: '',
    flexiondeformity: '',
    hyperextension: '',
    patellartracking: '',
    quadricepspower: '',
    filename: '',
    filetype: '',

    // knee score start
    totalkneescore: 0,
    kneescore_walking: 0,
    kneescore_stairs: 0,
    // knee score end

    // womac score strat
    totalwomacscore: 0,
    womac_walking: 0,
    womac_Stair: 0,
    womac_nocturnal: 0,
    womac_rest: 0,
    womac_weight: 0,
    totaldivide: 0,
    // womac score end

    //kujala score start
    totalkujalascore: 0,
    kujalascore_limp: 0,
    kujalascore_support: 0,
    kujalascore_walking: 0,
    kujalascore_stairs: 0,
    kujalascore_squatting: 0,
    kujalascore_running: 0,
    kujalascore_jumping: 0,
    kujalascore_prolonged: 0,
    kujalascore_pain: 0,
    kujalascore_swelling: 0,
    kujalascore_painful: 0,
    kujalascore_atrophy: 0,
    kujalascore_flexion: 0,
    //kujala score end

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
    rad_filename: '',
    rad_filetype: '',
    rad_vitaminD: '',
    rad_vitaminB12: '',
    // radiology end
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
    // intra operative end

    // post operative start
    post_date: '',
    post_side: '',
    post_posteriorslope: '',
    post_hipkneeankle: '',
    post_filename: '',
    post_filetype: '',
    // post operative end

    type: 'knee_primary'
  }
  filesToUpload: Array<File> = [];
  jointInvolvement: any = [
    { 'otherJointName': 'Opposite side', 'selected': false },
    { 'otherJointName': 'Hip', 'selected': false },
    { 'otherJointName': 'Shoulder', 'selected': false },
    { 'otherJointName': 'Elbow', 'selected': false },
    { 'otherJointName': 'Hand', 'selected': false },
    { 'otherJointName': 'Spine', 'selected': false }
  ];

  currentSymptoms: any = [
    { 'symptomsName': 'Pain', 'selected': false },
    { 'symptomsName': 'Anterior Knee Pain', 'selected': false },
    { 'symptomsName': 'Weakness', 'selected': false },
    { 'symptomsName': 'Swelling', 'selected': false },
    { 'symptomsName': 'Locking', 'selected': false },
    { 'symptomsName': 'Numbness', 'selected': false },
    { 'symptomsName': 'Loss of motion', 'selected': false },
    { 'symptomsName': 'Giving way', 'selected': false }
  ];

  symptomaggravated: any = [
    { 'aggravatedName': 'Walking', 'selected': false },
    { 'aggravatedName': 'Standing', 'selected': false },
    { 'aggravatedName': 'Stairs', 'selected': false }
  ];

  Comorbidities: any = [
    { 'comorbiditiesName': 'Diabetes', 'selected': false },
    { 'comorbiditiesName': 'Hypertension', 'selected': false },
    { 'comorbiditiesName': 'Endocrine', 'selected': false },
    { 'comorbiditiesName': 'Coronary heart disease', 'selected': false },
    { 'comorbiditiesName': 'Hepatitis', 'selected': false },
    { 'comorbiditiesName': 'HIV', 'selected': false },
    { 'comorbiditiesName': 'Lung disease', 'selected': false },
    // { 'comorbiditiesName': 'Peripheral vascular disease', 'selected': false },
    // { 'comorbiditiesName': 'Rheumatologic condition', 'selected': false },
    { 'comorbiditiesName': 'Parkinsons', 'selected': false }
    // { 'comorbiditiesName': 'Others', 'selected': false },
    // { 'comorbiditiesName': 'Chronic Kidney Disease', 'selected': false }
    // { 'comorbiditiesName': 'Type 2', 'selected': false },
    // { 'comorbiditiesName': 'HBsAg', 'selected': false }
  ];

  Previouskneesurgeries: any = [
    { 'PreviouskneesurgeriesName': 'Arthroscopy', 'selected': false },
    { 'PreviouskneesurgeriesName': 'UKR', 'selected': false },
    { 'PreviouskneesurgeriesName': 'Patellectomy', 'selected': false },
    { 'PreviouskneesurgeriesName': 'Lateral release', 'selected': false },
    { 'PreviouskneesurgeriesName': 'Meniscectomy', 'selected': false },
    { 'PreviouskneesurgeriesName': 'Synovectomy', 'selected': false },
    { 'PreviouskneesurgeriesName': 'Tib. Osteotomy', 'selected': false },
    { 'PreviouskneesurgeriesName': 'Others', 'selected': false }
  ];

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



  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
  }
  hospitalalias;
  applyblue;
  heightvalues = '';
  weightvalues = '';
  alias;
  bilateral = false;
  combinationvalue = false;
  tranexamicacid = false;
  disable = false;

  totalkneescore = '0';
  totalwomacscore = '0';
  totalkujalascore = '0';

  // knee scoring function start

  kneescoreWalkingChange(event: any) {
    this.patient.kneescore_walking = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs;
  }

  kneescorestairsChange(event: any) {
    this.patient.kneescore_stairs = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_stairs + +this.patient.kneescore_walking;
  }

  addkneescore(score) {
    console.log(score);
    this.surgeonService.surgeon_Patientkneescoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        this.totalkneescore = dataPatientId.message[0].preoperative.prekneescore.totalkneescore;
        console.log(this.totalkneescore);
      });
    });
  }

  // knee scoring function end

  // womac scoring function start

  womacwalkChange(event: any) {
    this.patient.womac_walking = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair +
      + this.patient.womac_nocturnal + + this.patient.womac_rest + +this.patient.womac_weight;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
    console.log(this.patient.totaldivide);
  }

  womacstairChange(event: any) {
    this.patient.womac_Stair = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_Stair + +this.patient.womac_walking +
      + this.patient.womac_nocturnal + + this.patient.womac_rest + +this.patient.womac_weight;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacnocturnalChange(event: any) {
    this.patient.womac_nocturnal = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_Stair + +this.patient.womac_walking +
      + this.patient.womac_nocturnal + + this.patient.womac_rest + +this.patient.womac_weight;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacrestChange(event: any) {
    this.patient.womac_rest = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_Stair + +this.patient.womac_walking +
      + this.patient.womac_nocturnal + + this.patient.womac_rest + +this.patient.womac_weight;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacweightChange(event: any) {
    this.patient.womac_weight = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_Stair + +this.patient.womac_walking +
      + this.patient.womac_nocturnal + + this.patient.womac_rest + +this.patient.womac_weight;
   this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  addwomacscore(score) {
    console.log(score);
    this.surgeonService.surgeon_Patientwomacscoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        this.totalwomacscore = dataPatientId.message[0].preoperative.prewomacscore.totalwomacscore;
        console.log(this.totalkneescore);
      });
    });
  }

  // womac scoring function end

  // kujala scoring function start

  kujalascorelimpChange(event: any) {
    this.patient.kujalascore_limp = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascoresupportChange(event: any) {
    this.patient.kujalascore_support = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascorewalkingChange(event: any) {
    this.patient.kujalascore_walking = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascorestairsChange(event: any) {
    this.patient.kujalascore_stairs = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascoresquattingChange(event: any) {
    this.patient.kujalascore_squatting = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascorerunningChange(event: any) {
    this.patient.kujalascore_running = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascorejumpingChange(event: any) {
    this.patient.kujalascore_jumping = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascoreprolongedChange(event: any) {
    this.patient.kujalascore_prolonged = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascorepainChange(event: any) {
    this.patient.kujalascore_pain = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascoreswellingChange(event: any) {
    this.patient.kujalascore_swelling = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascorepainfulChange(event: any) {
    this.patient.kujalascore_painful = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascoreatrophyChange(event: any) {
    this.patient.kujalascore_atrophy = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }

  kujalascoreflexionChange(event: any) {
    this.patient.kujalascore_flexion = event.target.value;
    this.patient.totalkujalascore = +this.patient.kujalascore_limp + + this.patient.kujalascore_stairs +
      + this.patient.kujalascore_support + + this.patient.kujalascore_walking + + this.patient.kujalascore_squatting +
      + this.patient.kujalascore_running + + this.patient.kujalascore_jumping + + this.patient.kujalascore_prolonged +
      + this.patient.kujalascore_pain + + this.patient.kujalascore_swelling + + this.patient.kujalascore_painful +
      + this.patient.kujalascore_atrophy + + this.patient.kujalascore_flexion;
  }


  addkujalascore(score) {
    console.log(score);
    this.surgeonService.surgeon_Patientkujalascoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        console.log(dataPatientId);
        this.totalkujalascore = dataPatientId.message[0].preoperative.prekujalascore.totalkujalascore;
        console.log(this.totalkneescore);
      });
    });
  }


  // kujala scoring function end

  // bmi calucation start
  onKey(event: any) {
    this.patient.height = event.target.value;
  }

  bmicalucation(event: any) {
    this.heightvalues = JSON.stringify(this.patient.height);
    this.weightvalues = event.target.value;
    var bmi = JSON.parse(this.weightvalues) / (JSON.parse(this.heightvalues) / 100 * JSON.parse(this.heightvalues) / 100);
    var rbmi = bmi.toFixed(1);
    this.patient.bmi = JSON.parse(rbmi);
  }

  // bmi calculation end
  Surgeon_GetHospitalInfo() {
    this.getinfosurgeon.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getinfosurgeon.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.getinfosurgeon.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.surgeonService.surgeon_GetHospitalInfo(this.getinfosurgeon).subscribe(data => {
      this.alias = data.data.hospitalAlias;
      this.surgeonService.surgeon_CountValue(this.getinfosurgeon.surgeonId).subscribe(data => {
        var num = 10000000;
        var num1 = JSON.stringify(num + (data.message.length + 1));
        var num2 = num1.substr(2, 8);
        this.patient.studyid = this.alias + '' + num2;
      });
    });

  }


  bilateralChange(test) {
    this.bilateral = true;
    this.combinationvalue = false;
  }

  bilateraltypeChange(event) {
    this.bilateral = true;
    this.combinationvalue = true;

  }
  bilateralChange1(test) {
    this.patient.bilateraltype = '';
    this.patient.combination = '';
    this.bilateral = false;
    this.combinationvalue = false;
  }

  tranexamicChange(tranexamicacid) {
    this.tranexamicacid = true;
  }
  tranexamicChange1(tranexamicacid) {
    this.tranexamicacid = false;
    this.patient.intra_tranexamicoption = '';
  }
  addPatient(patient) {
    console.log(patient);
    this.surgeonService.surgeon_AddPatient(patient).subscribe(data => {
      console.log(data);
      this.patient.firstname = '';
      this.patient.middlename = '';
      this.patient.lastname = '';
      this.patient.dob = '';
      this.patient.age = '';
      this.patient.gender = '';
      this.patient.height = '';
      this.patient.weight = '';
      this.patient.bmi = '';
      this.patient.uhid = '';
      this.patient.studyid = '';
      this.patient.address = '';
      this.patient.city = '';
      this.patient.state = '';
      this.patient.country = '';
      this.patient.zipcode = '';
      this.patient.telephone = '';
      this.patient.phoneno = '';
      this.patient.email = '';
      this.patient.side = '';
      this.patient.bilateraltype = '';
      this.patient.combination = '';
      this.firstname = false;
      this.middlename = false;
      this.lastname = false;
      this.dob = false;
      this.age = false;
      this.gender = false;
      this.height = false;
      this.weight = false;
      this.bmi = false;
      this.uhid = false;
      this.studyid = false;
      this.address = false;
      this.city = false;
      this.state = false;
      this.country = false;
      this.zipcode = false;
      this.telephone = false;
      this.phoneno = false;
      this.email = false;
      this.side = false;
      this.bilateraltype = false;
      this.combination = false;
      this.disable = false;
      this.patient_demographic = false;
      this.applypreoperative = true;
      this.patient_preoperative = true;
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        this.patentId = dataPatientId.message[0].demography._id;
        this.patient.patientId = dataPatientId.message[0]._id;
        this.patientname = dataPatientId.message[0].demography.firstname + '' + dataPatientId.message[0].demography.middlename + '' + dataPatientId.message[0].demography.lastname;
        this.patientage = dataPatientId.message[0].demography.age;
        this.patientsex = dataPatientId.message[0].demography.gender;
        this.patient.post_side = dataPatientId.message[0].demography.side;
      });
    });
  }
  getId() {
    this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
      this.patentId = dataPatientId.message[0].demography._id;
      this.patient.patientId = dataPatientId.message[0]._id;
      this.patientname = dataPatientId.message[0].demography.firstname + '' + dataPatientId.message[0].demography.middlename + '' + dataPatientId.message[0].demography.lastname;
      this.patientage = dataPatientId.message[0].demography.age;
      this.patientsex = dataPatientId.message[0].demography.gender;
      this.patient.post_side = dataPatientId.message[0].demography.side;
    });
  }
  addPatientPreoperative(patient) {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
    this.surgeonService.surgeon_AddPatientPreoperative(patient).subscribe(data => {
      console.log(data);
      this.patient_demographic = false;
      this.applypreoperative = false;
      this.patient_preoperative = false;
      this.patient_radiology = true;
      this.applyradiology = true;
    });
  }

  prefileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.patient.filename = dt + "-" + fileInput.target.files[0]['name'];
    this.patient.filetype = fileInput.target.files[0]['type'];
  }
  addPatientRadiology(patient) {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
    this.surgeonService.surgeon_AddPatientRadiology(patient).subscribe(data => {
      console.log(data);
      this.patient_demographic = false;
      this.applyradiology = false;
      this.patient_radiology = false;
      this.applyintraoperative = true;
      this.patient_intraoperative = true;

    });
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.patient.rad_filename = dt + "-" + fileInput.target.files[0]['name'];
    this.patient.rad_filetype = fileInput.target.files[0]['type'];
  }

  addPatientIntraoperative(patient) {
    this.surgeonService.surgeon_AddPatientIntraoperative(patient).subscribe(data => { });
    this.patient_demographic = false;
    this.applyintraoperative = false;
    this.patient_intraoperative = false;
    this.applypostoperative = true;
    this.patient_postoperative = true;
  }

  addPatientPostoperative(patient) {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
    this.surgeonService.surgeon_AddPatientPostoperative(patient).subscribe(data => {
      alert('success');
    });
  }
  postFileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.patient.post_filename = dt + "-" + fileInput.target.files[0]['name'];
    this.patient.post_filetype = fileInput.target.files[0]['type'];
  }

  ngOnInit() {
    this.Surgeon_GetHospitalInfo();
    this.getId();
    this.patient.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.patient.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.patient.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.applyblue = true;
    this.patient.joint = this.jointInvolvement;
    this.patient.symptoms = this.currentSymptoms;
    this.patient.implantsitu = this.implantsitu;
    this.patient.rad_stressfracture = this.stressfracture;
    this.patient.intra_anaesthesia = this.Anaesthesia;
    this.patient.intra_varus = this.intravarus;
    this.patient.intra_valgus = this.intravalgus;
    this.patient.intra_flexion = this.intraflexion;
    this.patient.symptomaggravated = this.symptomaggravated;
    this.patient.Comorbidities = this.Comorbidities;
    this.patient.Previouskneesurgeries = this.Previouskneesurgeries;
  }

}