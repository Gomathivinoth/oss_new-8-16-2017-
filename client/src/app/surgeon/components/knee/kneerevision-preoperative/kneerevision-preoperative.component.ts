import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-kneerevision-preoperative',
  templateUrl: './kneerevision-preoperative.component.html',
  styleUrls: ['./kneerevision-preoperative.component.css']
})
export class KneerevisionPreoperativeComponent implements OnInit {

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
  
  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
  }
applypreoperative;
  patient = {
   patientId :'',
    surgerydate: '',
    surgeonname: '',
    diagnosis: '',
    diagnosisothername: '',
    causerevision: [{
      'causerevisionName': String,
      'selected': Boolean,
    }],
    prostheticType: '',
    precompany: '',
    predesign: '',
    indexsurgery: '',
    revisionsurgeries: '',
    previouskneesurgery : '',
    symptoms: [{
      'symptomsName': String,
      'selected': Boolean,
    }],
    painrest:'',
    Comorbidities: [{
      'comorbiditiesName': String,
      'selected': Boolean,
    }],    
    previousscar: '',
    sinustract: '',
    previousflaps:'',
    retropatellar: '',
    patellartracking: '',
    quadricepspower: '',
    filename: '',
    filetype: '',
    filesize: '',
    scoretype: '',
    post_side:'',


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
  }

totalkneescore = '0';
  totalwomacscore = '0';
  totalsf36score = '0';
  totalkujalascore = '0';
  totaloxfordscore = '0';

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

  cause_revision: any = [
    { 'causerevisionName': 'Aseptic Loosening', 'selected': false },
    { 'causerevisionName': 'Instability', 'selected': false },
    { 'causerevisionName': 'Infection', 'selected': false },
    { 'causerevisionName': 'Periprosthetic', 'selected': false },
    { 'causerevisionName': 'Stiffness', 'selected': false },
    { 'causerevisionName': 'Others', 'selected': false }
  ];

  currentSymptoms: any = [
    { 'symptomsName': 'Pain', 'selected': false },
    { 'symptomsName': 'Clunk', 'selected': false },
    { 'symptomsName': 'Instability', 'selected': false },
    { 'symptomsName': 'Stiffness', 'selected': false },
    { 'symptomsName': 'Discharging sinus', 'selected': false },
    { 'symptomsName': 'Warmth', 'selected': false }
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
    { 'comorbiditiesName': 'HBsAg', 'selected': false },
    { 'comorbiditiesName': 'Others', 'selected': false }
  ];


   Surgeon_GetHospitalInfo() {
    this.getinfosurgeon.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getinfosurgeon.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.getinfosurgeon.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.surgeonService.surgeon_GetHospitalInfo(this.getinfosurgeon).subscribe(data => {
     this.patient.surgeonname = data.data1.name;
      
    });
  }

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
        this.totalkneescore = dataPatientId.message[0].preoperativescores.prekneescore.totalkneescore;
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
        this.totalwomacscore = dataPatientId.message[0].preoperativescores.prewomacscore.totalwomacscore;
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
        this.totalsf36score = dataPatientId.message[0].preoperativescores.presf36score.sf36_physicalscore;
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
        this.totalkujalascore = dataPatientId.message[0].preoperativescores.prekujalascore.totalkujalascore;
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
        this.totaloxfordscore = dataPatientId.message[0].preoperativescores.preoxfordscore.totaloxfordscore;
      });
    });
  }

   preoperativeChangeEvent(fileInput: any) {
    this.patient.filename = fileInput.target.files[0]['name'];
    this.patient.filetype = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    let age = new Date();
    formData.append("Name", "preoperative_");
    formData.append("Type", "kneerevision_preoperativeimage");
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

   addPatientPreoperative(patient) {
    this.surgeonService.surgeon_AddkneeRevisionPreoperative(patient).subscribe(data => {
       this.router.navigate(['surgeon/knee/knee-revision-radiology/',this.patient.patientId]);
    });
  }
  //oxford scoring function end
  ngOnInit() {
    this.Surgeon_GetHospitalInfo();
    this.applypreoperative=true;
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

    this.patient.causerevision = this.cause_revision;
    this.patient.symptoms = this.currentSymptoms;    
    this.patient.Comorbidities = this.Comorbidities;
  }

}
