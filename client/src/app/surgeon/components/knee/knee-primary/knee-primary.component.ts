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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  currentUrl;
  patient_demographic = true;
  patient_preoperative = false;
  patient_radiology = false;
  patient_intraoperative = false;
  patient_postoperative = false;
  patient_postoperativescore = false;
  applydemographic;
  applypreoperative;
  applyradiology;
  applyintraoperative;
  applypostoperative;
  applypostoperativescpre;
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
    this.applypostoperativescpre = false;
    this.patient_demographic = true;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
    this.patient_postoperative = false;
    this.patient_postoperativescore = false;
  }

  patientPreOperative() {

    this.applydemographic = false;
    this.applypreoperative = true;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.applypostoperative = false;
    this.applypostoperativescpre = false;
    this.patient_demographic = false;
    this.patient_preoperative = true;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
    this.patient_postoperative = false;
    this.patient_postoperativescore = false;
  }

  radiology() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = true;
    this.applyintraoperative = false;
    this.applypostoperative = false;
    this.applypostoperativescpre = false;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = true;
    this.patient_intraoperative = false;
    this.patient_postoperative = false;
    this.patient_postoperativescore = false;

  }

  intraoperative() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = true;
    this.applypostoperative = false;
    this.applypostoperativescpre = false;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = true;
    this.patient_postoperative = false;
    this.patient_postoperativescore = false;
  }

  postoperative() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.applypostoperative = true;
    this.applypostoperativescpre = false;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
    this.patient_postoperative = true;
    this.patient_postoperativescore = false;

  }

   postoperativescore() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.applypostoperative = false;
    this.applypostoperativescpre = true;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
    this.patient_postoperative = false;
    this.patient_postoperativescore = true;

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
  oneyear = true;
  year = true;

  imageDetails;
  image = {
    patientId: '',
    imageId: ''
  }

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
    etiologyothername: '',
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
    onsetsymptom: '',
    noyear: '',
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
    retropatellar: '',
    patellartracking: '',
    quadricepspower: '',
    filename: '',
    filetype: '',
    filesize: '',
    scoretype:'',


    // knee score start
    totalkneescore: 0,
    kneescore_walking: 0,
    kneescore_stairs: 0,
    kneescore_pointvalue: '',
    kneescore_point: 0,
    kneescore_lateral: 0,
    kneescore_posterior: 0,
    kneescore_extension: 0,
    kneescore_flexion: 0,
    kneescore_malalignment: 0,
    kneescore_malalignmentpoint: '',
    kneescore_rest: 0,
    kneescore_functionwalk: 0,
    kneescore_functionstairs: 0,
    kneescore_functiondeductions: 0,
    totalfunctionscore: 0,
    
    // knee score end

    // womac score strat
    totalwomacscore: 0,
    womac_walking: 0,
    womac_Stair: 0,
    womac_nocturnal: 0,
    womac_rest: 0,
    womac_weight: 0,
    womac_stiffness: 0,
    womac_stiffnessoccurring: 0,
    womac_descendingstairs: 0,
    womac_ascendingstairs: 0,
    womac_rising: 0,
    womac_standing: 0,
    womac_bending: 0,
    womac_surface: 0,
    womac_gettingcar: 0,
    womac_shopping: 0,
    womac_puttingsocks: 0,
    womac_lying: 0,
    womac_takingsocks: 0,
    womac_risingbed: 0,
    womac_gettingbath: 0,
    womac_sitting: 0,
    womac_gettingon: 0,
    womac_domestic: 0,
    womac_lightdomestic: 0,
    totaldivide: 0,
    // womac score end

    //sf36 score start
    totalsf36score: 0,
    sf36_generalhealth: 0,
    generalhealth: 0,
    sf36_ratehealth: 0,
    ratehealth: 0,
    sf36_vigorous: 0,
    vigorous: 0,
    sf36_moderate: 0,
    moderate: 0,
    sf36_lifting: 0,
    lifting: 0,
    sf36_severalflights: 0,
    severallights: 0,
    sf36_oneflights: 0,
    oneflights: 0,
    sf36_bending: 0,
    bending: 0,
    sf36_walking: 0,
    walking: 0,
    sf36_severalblocks: 0,
    severalblocks: 0,
    sf36_oneblock: 0,
    oneblock: 0,
    sf36_dressing: 0,
    dressing: 0,
    sf36_spentactivities: 0,
    spentactivities: 0,
    sf36_accomplished: 0,
    accomplished: 0,
    sf36_workactivities: 0,
    workactivities: 0,
    sf36_performing: 0,
    performing: 0,
    sf36_spentwork: 0,
    spentwork: 0,
    sf36_accomplishedless: 0,
    accomplishedless: 0,
    sf36_carefully: 0,
    carefully: 0,
    sf36_socialactivities: 0,
    socialactivities: 0,
    sf36_bodilypain: 0,
    bodilypain: 0,
    sf36_paininterfere: 0,
    paininterfere: 0,
    sf36_feelfull: 0,
    feelfull: 0,
    sf36_nervous: 0,
    nervous: 0,
    sf36_dumps: 0,
    dumps: 0,
    sf36_calm: 0,
    calm: 0,
    sf36_energy: 0,
    energy: 0,
    sf36_downhearted: 0,
    downhearted: 0,
    sf36_feelworn: 0,
    feelworn: 0,
    sf36_happyperson: 0,
    happyperson: 0,
    sf36_feeltired: 0,
    feeltired: 0,
    sf36_physicalhealth: 0,
    physicalhealth: 0,
    sf36_sick: 0,
    sick: 0,
    sf36_healthy: 0,
    healthy: 0,
    sf36_getworse: 0,
    getworse: 0,
    sf36_excellent: 0,
    excellent: 0,
    sf36_physicalscore: 0,
    sf36_rolelimitation: 0,
    sf36_emotional: 0,
    sf36_energyfatigue: 0,
    sf36_wellbeing: 0,
    sf36_Socialfunction: 0,
    sf36_pain: 0,
    sf36_health: 0,
    // sf36 score end

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

    //oxford score start
    totaloxfordscore: 60,
    oxfordscore_pain: 0,
    oxfordscore_trouble: 0,
    oxfordscore_sick: 0,
    oxfordscore_walk: 0,
    oxfordscore_painful: 0,
    oxfordscore_limping: 0,
    oxfordscore_kneel: 0,
    oxfordscore_troubled: 0,
    oxfordscore_interfered: 0,
    oxfordscore_felt: 0,
    oxfordscore_household: 0,
    oxfordscore_stairs: 0,
    totaloxford: 60,

    //oxford score end

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
    intra_cement:'',
    intra_antibiotic:'',
    intra_viscosity:'',
    intra_cocktail:'',
    intra_complications:'',
    intra_complicationdetail:'',
    intra_company:'',
    intra_design:'',
    intra_femoralSize:'',
    intra_tibialSize:'',
    intra_patellarSize:'',
    intra_insertPoly:'',
    intra_componentStability: [{
      'componentStabilityName': String,
      'selected': Boolean,
    }],
    intra_contracture:'',
    intra_hyperextension:'',
    intra_medialLaxity:'',
    intra_patellarTracking:'',
    intra_operativehour:'',
    intra_operativeminute:'',
    intra_bloodloss:'',
    intra_drains:'',
     intra_mechanical: [{
      'mechanicalName': String,
      'selected': Boolean,
    }],
    intra_pharmacological: [{
      'pharmacologicalName': String,
      'selected': Boolean,
    }],
    intra_information:'',
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
    { 'comorbiditiesName': 'Peripheral vascular disease', 'selected': false },
    { 'comorbiditiesName': 'Rheumatologic condition', 'selected': false },
    { 'comorbiditiesName': 'Parkinsons', 'selected': false },
    { 'comorbiditiesName': 'Chronic Kidney Disease', 'selected': false },
    { 'comorbiditiesName': 'Type 2', 'selected': false },
    { 'comorbiditiesName': 'HBsAg', 'selected': false },
    { 'comorbiditiesName': 'Others', 'selected': false },
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
  femoralstem = false;
  tibialStem = false;
  cements = false;
  complication = false;
  disable = false;

  totalkneescore = '0';
  totalwomacscore = '0';
  totalsf36score = '0';
  totalkujalascore = '0';
  totaloxfordscore = '0';

   totalpostkneescore = '0';
  totalpostwomacscore = '0';
  totalpostsf36score = '0';
  totalpostkujalascore = '0';
  totalpostoxfordscore = '0';

  // knee scoring function start

  kneescoreWalkingChange(event: any) {
    this.patient.kneescore_walking = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;
  }

  kneescorestairsChange(event: any) {
    this.patient.kneescore_stairs = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;
  }

  onKeyPointValue(event: any) {
    this.patient.kneescore_pointvalue = event.target.value;
    var point = event.target.value / 8;
    this.patient.kneescore_point = point;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;

  }
  kneescorelateralChange(event: any) {
    this.patient.kneescore_lateral = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;
  }

  kneescoreposteriorChange(event: any) {
    this.patient.kneescore_posterior = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;
  }

  kneescoreextensionChange(event: any) {
    this.patient.kneescore_extension = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;
  }

  kneescoreflexionChange(event: any) {
    this.patient.kneescore_flexion = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;
  }

  onKeyMalalignment(event: any) {
    this.patient.kneescore_malalignmentpoint = event.target.value;
    if (event.target.value >= 11 && event.target.value <= 15) {
      this.patient.kneescore_malalignment = -2;
    } else if (event.target.value >= 16 && event.target.value <= 20) {
      this.patient.kneescore_malalignment = -4;
    } else if (event.target.value >= 21 && event.target.value <= 25) {
      this.patient.kneescore_malalignment = -6;
    } else if (event.target.value >= 0 && event.target.value <= 4) {
      this.patient.kneescore_malalignment = -2;
    } else if (event.target.value >= -5 && event.target.value <= 0) {
      this.patient.kneescore_malalignment = -4;
    } else if (event.target.value >= -10 && event.target.value <= 6) {
      this.patient.kneescore_malalignment = -6;
    }
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;

  }

  kneescorerestChange(event: any) {
    this.patient.kneescore_rest = event.target.value;
    this.patient.totalkneescore = +this.patient.kneescore_walking + + this.patient.kneescore_stairs +
      +this.patient.kneescore_lateral + + this.patient.kneescore_point + + this.patient.kneescore_posterior +
      +this.patient.kneescore_extension + + this.patient.kneescore_flexion + +this.patient.kneescore_malalignment + +
      this.patient.kneescore_rest;
  }

  kneescorefunctionwalkChange(event: any) {
    this.patient.kneescore_functionwalk = event.target.value;
    this.patient.totalfunctionscore = +this.patient.kneescore_functionwalk + + this.patient.kneescore_functionstairs +
      +this.patient.kneescore_functiondeductions;
  }

  kneescorefunctionstairsChange(event: any) {
    this.patient.kneescore_functionstairs = event.target.value;
    this.patient.totalfunctionscore = +this.patient.kneescore_functionwalk + + this.patient.kneescore_functionstairs +
      +this.patient.kneescore_functiondeductions;
  }

  kneescoredeductionsChange(event: any) {
    this.patient.kneescore_functiondeductions = event.target.value;
    this.patient.totalfunctionscore = +this.patient.kneescore_functionwalk + + this.patient.kneescore_functionstairs +
      +this.patient.kneescore_functiondeductions;
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
  //  addpostkneescore(score) {
  //   this.surgeonService.surgeon_PatientPostkneescoure(score).subscribe(data => {
  //     this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
  //       this.totalpostkneescore = dataPatientId.message[0].postoperativescores.postkneescore.totalkneescore;
  //       console.log(this.totalkneescore);
  //     });
  //   });
  // }

  // knee scoring function end

  // womac scoring function start

  womacwalkChange(event: any) {
    this.patient.womac_walking = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacstairChange(event: any) {
    this.patient.womac_Stair = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacnocturnalChange(event: any) {
    this.patient.womac_nocturnal = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacrestChange(event: any) {
    this.patient.womac_rest = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacweightChange(event: any) {
    this.patient.womac_weight = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacstiffnessChange(event: any) {
    this.patient.womac_stiffness = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacstiffnessoccurringChange(event: any) {
    this.patient.womac_stiffnessoccurring = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacdescendingstairsChange(event: any) {
    this.patient.womac_descendingstairs = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacascendingstairsChange(event: any) {
    this.patient.womac_ascendingstairs = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacrisingChange(event: any) {
    this.patient.womac_rising = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacstandingChange(event: any) {
    this.patient.womac_standing = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacbendingChange(event: any) {
    this.patient.womac_bending = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }


  womacsurfaceChange(event: any) {
    this.patient.womac_surface = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacgettingcarChange(event: any) {
    this.patient.womac_gettingcar = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacshoppingChange(event: any) {
    this.patient.womac_shopping = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacputtingsocksChange(event: any) {
    this.patient.womac_puttingsocks = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womaclyingChange(event: any) {
    this.patient.womac_lying = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womactakingsocksChange(event: any) {
    this.patient.womac_takingsocks = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacrisingbedChange(event: any) {
    this.patient.womac_risingbed = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacgettingbathChange(event: any) {
    this.patient.womac_gettingbath = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacsittingChange(event: any) {
    this.patient.womac_sitting = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacgettingonChange(event: any) {
    this.patient.womac_gettingon = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womacdomesticChange(event: any) {
    this.patient.womac_domestic = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
    this.patient.totaldivide = (this.patient.totalwomacscore / 96) * 100;
  }

  womaclightdomesticChange(event: any) {
    this.patient.womac_lightdomestic = event.target.value;
    this.patient.totalwomacscore = +this.patient.womac_walking + + this.patient.womac_Stair + +this.patient.womac_nocturnal +
      +this.patient.womac_rest + + this.patient.womac_weight + + this.patient.womac_stiffness + + this.patient.womac_stiffnessoccurring +
      +this.patient.womac_descendingstairs + + this.patient.womac_ascendingstairs + + this.patient.womac_rising +
      +this.patient.womac_standing + + this.patient.womac_bending + + this.patient.womac_surface + + this.patient.womac_gettingcar +
      +this.patient.womac_shopping + + this.patient.womac_puttingsocks + + this.patient.womac_lying + + this.patient.womac_takingsocks +
      +this.patient.womac_risingbed + + this.patient.womac_gettingbath + + this.patient.womac_sitting + + this.patient.womac_gettingon +
      +this.patient.womac_domestic + + this.patient.womac_lightdomestic;
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

  // sf36 scoring function start


  sf36scorevigorousChange(event: any) {
    this.patient.sf36_vigorous = event.target.value;
    this.patient.vigorous = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoremoderateChange(event: any) {
    this.patient.sf36_moderate = event.target.value;
    this.patient.moderate = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreliftingChange(event: any) {
    this.patient.sf36_lifting = event.target.value;
    this.patient.lifting = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreseveralflightsChange(event: any) {
    this.patient.sf36_severalflights = event.target.value;
    this.patient.severallights = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreoneflightsChange(event: any) {
    this.patient.sf36_oneflights = event.target.value;
    this.patient.oneflights = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scorebendingChange(event: any) {
    this.patient.sf36_bending = event.target.value;
    this.patient.bending = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scorewalkingChange(event: any) {
    this.patient.sf36_walking = event.target.value;
    this.patient.walking = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreseveralblockChange(event: any) {
    this.patient.sf36_severalblocks = event.target.value;
    this.patient.severalblocks = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;

  }

  sf36scoreoneblockChange(event: any) {
    this.patient.sf36_oneblock = event.target.value;
    this.patient.oneblock = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;

  }

  sf36scoredressingChange(event: any) {
    this.patient.sf36_dressing = event.target.value;
    this.patient.dressing = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;

  }

  sf36scorespentactivitiesChange(event: any) {
    this.patient.sf36_spentactivities = event.target.value;
    this.patient.spentactivities = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scorespentaccomplishedChange(event: any) {
    this.patient.sf36_accomplished = event.target.value;
    this.patient.accomplished = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scoreworkactivitiesChange(event: any) {
    this.patient.sf36_workactivities = event.target.value;
    this.patient.workactivities = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scoreperformingChange(event: any) {
    this.patient.sf36_performing = event.target.value;
    this.patient.performing = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scorespentworkChange(event: any) {
    this.patient.sf36_spentwork = event.target.value;
    this.patient.spentwork = event.target.value / 3;
    this.patient.sf36_emotional = +this.patient.spentwork + +this.patient.accomplishedless + +this.patient.carefully;
  }

  sf36scoreaccomplishedlessChange(event: any) {
    this.patient.sf36_accomplishedless = event.target.value;
    this.patient.accomplishedless = event.target.value / 3;
    this.patient.sf36_emotional = +this.patient.spentwork + +this.patient.accomplishedless + +this.patient.carefully;
  }

  sf36scorecarefullyChange(event: any) {
    this.patient.sf36_carefully = event.target.value;
    this.patient.carefully = event.target.value / 3;
    this.patient.sf36_emotional = +this.patient.spentwork + +this.patient.accomplishedless + +this.patient.carefully;
  }

  sf36scorefeelfullChange(event: any) {
    this.patient.sf36_feelfull = event.target.value;
    this.patient.feelfull = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scoreenergyChange(event: any) {
    this.patient.sf36_energy = event.target.value;
    this.patient.energy = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scorefeelwornChange(event: any) {
    this.patient.sf36_feelworn = event.target.value;
    this.patient.feelworn = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scorefeeltiredChange(event: any) {
    this.patient.sf36_feeltired = event.target.value;
    this.patient.feeltired = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scorenervousChange(event: any) {
    this.patient.sf36_nervous = event.target.value;
    this.patient.nervous = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scoredumpsChange(event: any) {
    this.patient.sf36_dumps = event.target.value;
    this.patient.dumps = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scorecalmChange(event: any) {
    this.patient.sf36_calm = event.target.value;
    this.patient.calm = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scoredownheartedChange(event: any) {
    this.patient.sf36_downhearted = event.target.value;
    this.patient.downhearted = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scorehappypersonChange(event: any) {
    this.patient.sf36_happyperson = event.target.value;
    this.patient.happyperson = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scoresocialactivitiesChange(event: any) {
    this.patient.sf36_socialactivities = event.target.value;
    this.patient.socialactivities = event.target.value / 2;
    this.patient.sf36_Socialfunction = +this.patient.socialactivities + +this.patient.physicalhealth;
  }

  sf36scorephysicalhealthChange(event: any) {
    this.patient.sf36_physicalhealth = event.target.value;
    this.patient.physicalhealth = event.target.value / 2;
    this.patient.sf36_Socialfunction = +this.patient.socialactivities + +this.patient.physicalhealth;
  }

  sf36scorebodilypainChange(event: any) {
    this.patient.sf36_bodilypain = event.target.value;
    this.patient.bodilypain = event.target.value / 2;
    this.patient.sf36_pain = +this.patient.bodilypain + +this.patient.physicalhealth;
  }

  sf36scorepaininterfereChange(event: any) {
    this.patient.sf36_paininterfere = event.target.value;
    this.patient.paininterfere = event.target.value / 2;
    this.patient.sf36_pain = +this.patient.bodilypain + +this.patient.paininterfere;
  }

  sf36scorehealthChange(event: any) {
    this.patient.sf36_generalhealth = event.target.value;
    this.patient.generalhealth = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scoresickChange(event: any) {
    this.patient.sf36_sick = event.target.value;
    this.patient.sick = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scorehealthyChange(event: any) {
    this.patient.sf36_healthy = event.target.value;
    this.patient.healthy = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scoregetworseChange(event: any) {
    this.patient.sf36_getworse = event.target.value;
    this.patient.getworse = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scoreexcellentChange(event: any) {
    this.patient.sf36_excellent = event.target.value;
    this.patient.excellent = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  addsf36score(score) {
    console.log(score);
    this.surgeonService.surgeon_Patientsf36scoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        this.totalsf36score = dataPatientId.message[0].preoperative.presf36score.sf36_physicalscore;
        console.log(this.totalkneescore);
      });
    });
  }
  // sf36 scoring function end

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

  //oxford scoring function start

  oxfordscorepainChange(event: any) {
    this.patient.oxfordscore_pain = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscoretroubleChange(event: any) {
    this.patient.oxfordscore_trouble = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscoresickChange(event: any) {
    this.patient.oxfordscore_sick = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscorewalkChange(event: any) {
    this.patient.oxfordscore_walk = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscorepainfulChange(event: any) {
    this.patient.oxfordscore_painful = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscorelimpingChange(event: any) {
    this.patient.oxfordscore_limping = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscorekneelChange(event: any) {
    this.patient.oxfordscore_kneel = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscoretroubledChange(event: any) {
    this.patient.oxfordscore_troubled = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscoreinterfereddChange(event: any) {
    this.patient.oxfordscore_interfered = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscorefeltChange(event: any) {
    this.patient.oxfordscore_felt = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscorehouseholdChange(event: any) {
    this.patient.oxfordscore_household = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  oxfordscorestairsChange(event: any) {
    this.patient.oxfordscore_stairs = event.target.value;
    var count = +this.patient.oxfordscore_pain + + this.patient.oxfordscore_trouble + + this.patient.oxfordscore_sick +
      +this.patient.oxfordscore_walk + +this.patient.oxfordscore_painful + + this.patient.oxfordscore_limping +
      + this.patient.oxfordscore_kneel + + this.patient.oxfordscore_troubled + + this.patient.oxfordscore_interfered +
      +this.patient.oxfordscore_felt + + this.patient.oxfordscore_household + + this.patient.oxfordscore_stairs;
    this.patient.totaloxfordscore = this.patient.totaloxford - count;
  }

  addoxfordscore(score) {
    console.log(score);
    this.surgeonService.surgeon_Patientoxfordscoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        console.log(dataPatientId);
        this.totaloxfordscore = dataPatientId.message[0].preoperative.preoxfordscore.totaloxfordscore;
      });
    });
  }

  //oxford scoring function end


  oneyearChange(event: any) {
    this.oneyear = false;
  }
  yearChange(event: any) {
    this.oneyear = true;
  }

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

  datecheckvalue(event: any) {
    var today = new Date();
    var birthDate = new Date(event.target.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.patient.age = JSON.stringify(age);
  }

  // bmi calculation end
  Surgeon_GetHospitalInfo() {
    this.getinfosurgeon.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getinfosurgeon.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.getinfosurgeon.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.surgeonService.surgeon_GetHospitalInfo(this.getinfosurgeon).subscribe(data => {
      this.alias = data.data.hospitalAlias;
      this.patient.surgeonname = data.data1.name;
      console.log(this.getinfosurgeon.surgeonId);
      this.surgeonService.surgeon_CountValue(this.getinfosurgeon.surgeonId).subscribe(data => {
        //console.log(data.message);
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
  
  addPatient(patient) {
    console.log(patient);
    this.surgeonService.surgeon_AddPatient(patient).subscribe(data => {
      console.log(data);
      // this.patient.firstname = '';
      // this.patient.middlename = '';
      // this.patient.lastname = '';
      // this.patient.dob = '';
      // this.patient.age = '';
      // this.patient.gender = '';
      // this.patient.height = '';
      // this.patient.weight = '';
      // this.patient.bmi = '';
      // this.patient.uhid = '';
      // this.patient.studyid = '';
      // this.patient.address = '';
      // this.patient.city = '';
      // this.patient.state = '';
      // this.patient.country = '';
      // this.patient.zipcode = '';
      // this.patient.telephone = '';
      // this.patient.phoneno = '';
      // this.patient.email = '';
      // this.patient.side = '';
      // this.patient.bilateraltype = '';
      // this.patient.combination = '';
      // this.firstname = false;
      // this.middlename = false;
      // this.lastname = false;
      // this.dob = false;
      // this.age = false;
      // this.gender = false;
      // this.height = false;
      // this.weight = false;
      // this.bmi = false;
      // this.uhid = false;
      // this.studyid = false;
      // this.address = false;
      // this.city = false;
      // this.state = false;
      // this.country = false;
      // this.zipcode = false;
      // this.telephone = false;
      // this.phoneno = false;
      // this.email = false;
      // this.side = false;
      // this.bilateraltype = false;
      // this.combination = false;
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
      this.imageDetails = dataPatientId.message[0].imageupload;
    });
  }
  addPatientPreoperative(patient) {
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
    this.patient.filetype = fileInput.target.files[0]['type'];
    this.patient.filesize = fileInput.target.files[0]['size'];
    this.patient.filename = fileInput.target.files[0]['name'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "preoperative_");
    formData.append("Type", "preoperativeimage");
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
    // var filePath = 'http://localhost:3000/uploads/image'; 
    // fs.unlinkSync(filePath);
    this.surgeonService.deleteImage(this.image).subscribe(data => {
      this.imageDetails = data.data;
    });
  }
  addPatientRadiology(patient) {
    this.surgeonService.surgeon_AddPatientRadiology(patient).subscribe(data => {
      console.log(data);
      this.patient_demographic = false;
      this.applyradiology = false;
      this.patient_radiology = false;
      this.applyintraoperative = true;
      this.patient_intraoperative = true;

    });
  }


  radfileChangeEvent(fileInput: any) {
    this.patient.filename = fileInput.target.files[0]['name'];
    this.patient.filetype = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "preoperative_");
    formData.append("Type", "radiologyimage");
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

  addPatientIntraoperative(patient) {
    this.surgeonService.surgeon_AddPatientIntraoperative(patient).subscribe(data => { });
    this.patient_demographic = false;
    this.applyintraoperative = false;
    this.patient_intraoperative = false;
    this.applypostoperative = true;
    this.patient_postoperative = true;
  }

  addPatientPostoperative(patient) {
    this.surgeonService.surgeon_AddPatientPostoperative(patient).subscribe(data => {
       this.patient_demographic = false;
    this.applypostoperative = false;
    this.patient_postoperative = false;
    this.applypostoperativescpre = true;
    this.patient_postoperativescore = true;
    });
  }

  postfileChangeEvent(fileInput: any) {
    this.patient.filename = fileInput.target.files[0]['name'];
    this.patient.filetype = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "preoperative_");
    formData.append("Type", "postoperativeimage");
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
    this.patient.intra_reconstruction = this.intrareconstruction;
    this.patient.intra_componentStability = this.intracomponentStability;
    this.patient.intra_mechanical = this.intramechanical;
    this.patient.intra_pharmacological = this.intrapharmacological;
  }

}